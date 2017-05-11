function meal(name, description, price, veggie){
	return {
		name,
		description,
		price,
		veggie
	};	
}

var meals=[];
meals.push(meal("Super cheesy burger", "Discover our great cheesy burger with mozzarella, gorgonzola and pecorino", 8.5, true));
meals.push(meal("Bad beef burger", "Full of angry beef, jalapeno peppers, fried onions and our special BBQ sauce", 12, false));


module.exports = function (cb) {
    cb(null, JSON.stringify(meals));
};