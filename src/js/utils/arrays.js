export const getArrayDifferenceByName = (array1, array2) => {
    return array1.filter((object1) => {
        return !array2.some((object2) => {
            return object1.name.toLowerCase() === object2.name.toLowerCase();
        });
    });
};
