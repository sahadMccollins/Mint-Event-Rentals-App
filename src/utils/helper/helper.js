export const emailValidate = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/;
export const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-\+\(\)\?\:\|\{\}\£])(?=.{8,})/;
export const mobileValidate = /^[0-9]{10}$/;

export const getColorVariants = (product) => {
    const colorVariants = {};

    product.variants.forEach(v => {
        const colorOpt = v.selectedOptions?.find(
            o => o.name.toLowerCase() === 'color'
        );

        if (!colorOpt) return;

        if (!colorVariants[colorOpt.value]) {
            colorVariants[colorOpt.value] = {
                title: colorOpt.value,
                image: v.image || product.image,
                variantId: v.id,
            };
        }
    });

    return Object.values(colorVariants);
};

export const splitName = (fullName = '') => {
    const parts = fullName.trim().split(' ');
    return {
        first_name: parts[0] || 'N/A',
        last_name: parts.slice(1).join(' ') || 'N/A',
    };
};
