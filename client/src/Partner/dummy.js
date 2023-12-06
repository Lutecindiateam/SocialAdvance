function Dummy() {
    return [
      [
        {
          id: 1,
          businessname: "ABC Inc.",
          mobilenumber: "123-456-7890",
          address: "123 Main St",
          pincode: "12345",
          city: "City1",
          state: "State1",
          category: "Category1",
          subcategory: { id: 101, name: "Subcategory1" },
        },

        {
          id: 2,
          businessName: "XYZ Corp.",
          mobileNumber: "987-654-3210",
          address: "456 Oak St",
          pincode: "67890",
          city: "City2",
          state: "State2",
          category: "Category2",
          subcategory: { id: 102, name: "Subcategory2" },
        }
      
      ]
      
          
    ];
  }
  
  module.exports = Dummy;