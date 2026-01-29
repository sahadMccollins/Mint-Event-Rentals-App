// import React from 'react';
// import {View, FlatList} from 'react-native';
// import styles from './styles';
// import {Product} from '@commonComponents';

// export default categorys = props => {
//   const {categorys, t} = props;

//   return (
//     <View style={styles.mainContainer}>
//       <FlatList
//         numColumns={2}
//         columnWrapperStyle={styles.column}
//         data={categorys}
//         ItemSeparatorComponent={() => <View style={styles.seperator} />} // ItemSeparatorComponent={styles.seperator}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <Product
//             image={item.image}
//             title={item.title}
//             discountPrice={item.discountPrice}
//             price={item.price}
//             discount={item.discount}
//             t={props.t}
//             disc
//             width={"50%"}
//             newProduct={item.newProduct}
//             navigation={props.navigation}
//           />
//         )}
//       />
//     </View>
//   );
// };



import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { Product } from '@commonComponents';
import { CommonModal, AddToCartModal } from '@otherComponent';

export default categorys = props => {
  const { products, t, navigation } = props;
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const visibleAddToCartModal = useCallback(() => {
    setShowAddToCartModal(prev => !prev);
    // Clear data when closing
    if (showAddToCartModal) {
      setSelectedProduct(null);
    }
  }, [showAddToCartModal]);

  const renderProduct = useCallback(({ item }) => (
    <Product
      product={item}
      t={t}
      disc
      width={"50%"}
      navigation={navigation}
      onAddToCart={(product) => {
        setSelectedProduct(product);
        visibleAddToCartModal();
      }}
    />
  ), [t, navigation, visibleAddToCartModal]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={products}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProduct}
      />

      <CommonModal
        modal={
          <AddToCartModal
            onPress={visibleAddToCartModal}
            navigation={navigation}
            t={t}
            from="shopPage"
            product={selectedProduct}
          />
        }
        showModal={showAddToCartModal}
        visibleModal={visibleAddToCartModal}
      />
    </View>
  );
};