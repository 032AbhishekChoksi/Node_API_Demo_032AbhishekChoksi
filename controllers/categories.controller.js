const categoriesService = require("../services/categories.service");
// Business Layout OR Controller
exports.findAll = (req, res, next) => {
    console.log("controller");
    
    categoriesService.getCategories();
}