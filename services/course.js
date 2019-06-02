const Course = require("../database/models").Course;
const Skill = require("../database/models").Skill;
const Company = require("../database/models").Company;

const skillService = require("../services/skill");
const companyService = require("./company");

exports.create = (companyId, data) => {
    return companyService.findById(companyId).then(company => {
        return company.createCourse(data).then(newCourse => {
            if (data.skills) {
                data.skills.forEach(skill => {
                    return skillService.joinCourse(newCourse, skill);
                });
            }
        });
    });
};

exports.getAllCourses = () => {
    return Course.findAll({
        include: [Skill, Company]
    });
};

exports.findByData = data => {
    var filterList = [];
    if (data.company) {
        filterList.push({
            model: Company,
            where: {
                name: data.company
            }
        })
    } else {
        filterList.push({
            model: Company
        })
    }

    if (data.skill) {
        filterList.push({
            model: Skill,
            where: {
                name: data.skill
            }
        })
    } else {
        filterList.push({
            model: Skill
        })
    }
    return Course.findAll({
        include: filterList
    });
};

exports.delete = courseId => {
    Course.destroy({where: {id: courseId}});
};

exports.update = (courseId, data) => {
    return Course.update(data, {where: {id: courseId}});
};
