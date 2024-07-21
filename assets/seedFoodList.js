import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

const food_list = [
    { name: "Greek Salad", image: './food_1.png', price: 12, description: "A refreshing mix of cucumbers, tomatoes, and feta cheese.", category: "Salad" },
    { name: "Peri Peri Rolls", image: './food_6.png', price: 12, description: "Spicy chicken rolls with peri peri sauce.", category: "Rolls" },
    { name: "Ripple Ice Cream", image: './food_9.png', price: 14, description: "Creamy ice cream with a ripple of fruit sauce.", category: "Desserts" },
    { name: "Chicken Sandwich", image: './food_13.png', price: 12, description: "Grilled chicken sandwich with lettuce and mayo.", category: "Sandwich" },
    { name: "Cup Cake", image: './food_17.png', price: 14, description: "Soft and moist cupcakes topped with buttercream.", category: "Cake" },
    { name: "Garlic Mushroom", image: './food_21.png', price: 14, description: "Sautéed mushrooms with garlic and herbs.", category: "Pure Veg" },
    { name: "Cheese Pasta", image: './food_25.png', price: 12, description: "Pasta tossed in a creamy cheese sauce.", category: "Pasta" },
    { name: "Butter Noodles", image: './food_29.png', price: 14, description: "Noodles sautéed with butter and herbs.", category: "Noodles" },

    { name: "Veg Salad", image: './food_2.png', price: 18, description: "A mix of fresh vegetables with a light dressing.", category: "Salad" },
    { name: "Chicken Rolls", image: './food_7.png', price: 20, description: "Delicious chicken rolls with spicy sauce.", category: "Rolls" },
    { name: "Fruit Ice Cream", image: './food_10.png', price: 22, description: "Ice cream with chunks of fresh fruit.", category: "Desserts" },
    { name: "Vegan Sandwich", image: './food_14.png', price: 18, description: "A healthy sandwich with vegan ingredients.", category: "Sandwich" },
    { name: "Vegan Cake", image: './food_18.png', price: 12, description: "Delicious cake made with vegan ingredients.", category: "Cake" },
    { name: "Fried Cauliflower", image: './food_22.png', price: 22, description: "Crispy fried cauliflower with spices.", category: "Pure Veg" },
    { name: "Tomato Pasta", image: './food_26.png', price: 18, description: "Pasta in a rich tomato sauce.", category: "Pasta" },
    { name: "Veg Noodles", image: './food_30.png', price: 12, description: "Noodles with mixed vegetables.", category: "Noodles" },

    { name: "Clover Salad", image: './food_3.png', price: 16, description: "Fresh salad with clover sprouts.", category: "Salad" },
    { name: "Veg Rolls", image: './food_8.png', price: 15, description: "Tasty vegetable rolls with spicy filling.", category: "Rolls" },
    { name: "Jar Ice Cream", image: './food_11.png', price: 10, description: "Ice cream served in a jar.", category: "Desserts" },
    { name: "Grilled Sandwich", image: './food_15.png', price: 16, description: "Grilled sandwich with vegetables and cheese.", category: "Sandwich" },
    { name: "Butterscotch Cake", image: './food_19.png', price: 20, description: "Cake with a rich butterscotch flavor.", category: "Cake" },
    { name: "Mix Veg Pulao", image: './food_23.png', price: 10, description: "Rice dish with mixed vegetables.", category: "Pure Veg" },
    { name: "Creamy Pasta", image: './food_27.png', price: 16, description: "Pasta in a creamy sauce.", category: "Pasta" },
    { name: "Somen Noodles", image: './food_31.png', price: 20, description: "Light and thin Japanese noodles.", category: "Noodles" },

    { name: "Chicken Salad", image: './food_4.png', price: 24, description: "Salad with grilled chicken pieces.", category: "Salad" },
    { name: "Vanilla Ice Cream", image: './food_12.png', price: 12, description: "Classic vanilla ice cream.", category: "Desserts" },
    { name: "Bread Sandwich", image: './food_16.png', price: 24, description: "Simple sandwich with bread and fillings.", category: "Sandwich" },
    { name: "Sliced Cake", image: './food_20.png', price: 15, description: "Delicious sliced cake with layers.", category: "Cake" },
    { name: "Rice Zucchini", image: './food_24.png', price: 12, description: "Rice dish with zucchini.", category: "Pure Veg" },
    { name: "Chicken Pasta", image: './food_28.png', price: 24, description: "Pasta with grilled chicken.", category: "Pasta" },
    { name: "Cooked Noodles", image: './food_32.png', price: 15, description: "Noodles cooked to perfection.", category: "Noodles" }
];

const url = process.env.MONGODB_URI;

const seedFoodList = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected successfully to MongoDB Atlas');

        await foodModel.deleteMany({});
        console.log('Existing food items removed');

        await foodModel.insertMany(food_list);
        console.log('Inserted food_list into the database');

    } catch (err) {
        console.error('Error inserting data: ', err);
    } finally {
        mongoose.connection.close();
        console.log('Connection closed');
    }
};

seedFoodList();
