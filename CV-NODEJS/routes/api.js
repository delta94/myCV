const express = require('express');
const router = express.Router();
const CV = require('../app/controllers/cv.ctrl');
const Award = require('../app/controllers/award.ctrl');
const Certificate = require('../app/controllers/certificate.ctrl');
const Education = require('../app/controllers/education.ctrl');
const Language = require('../app/controllers/language.ctrl');
const Objective = require('../app/controllers/objective.ctrl');
const Organization = require('../app/controllers/organization.ctrl');
const Project = require('../app/controllers/project.ctrl');
const Reference = require('../app/controllers/reference.ctrl');
const Skill = require('../app/controllers/skill.ctrl');
const Social = require('../app/controllers/social.ctrl');

//CV
router.get('/cv', CV.GetAllCV);
router.get('/cv/:id', CV.GetCVbyID);
router.post('/cv' ,CV.CreateCV);
router.put('/cv/:id', CV.UpdateCV );
router.delete('/cv/:id', CV.RemoveCV);
router.post('/getListComponent/:id', CV.ChangePosition);
router.post('/hiddenComponent/:id', CV.HiddenComponent);
router.get('/getListCheck/:id', CV.CheckComponent);

//Award
router.get('/award/:idcv', Award.GetAllAward);
router.post('/award', Award.CreateAward);
router.put('/award/:id', Award.UpdateAward);
router.delete('/award/:id', Award.RemoveAward);

//Certificate
router.get('/certificate/:idcv', Certificate.GetAllCertificate);
router.post('/certificate', Certificate.CreateCertificate);
router.put('/certificate/:id', Certificate.UpdateCertificate);
router.delete('/certificate/:id', Certificate.RemoveCertificate);

//Education
router.get('/education/:idcv', Education.GetAllEducation);
router.post('/education', Education.CreateEducation);
router.put('/education/:id', Education.UpdateEducation);
router.delete('/education/:id', Education.RemoveEducation);

//Language
router.get('/language/:idcv', Language.GetAllLanguage);
router.post('/language', Language.CreateLanguage);
router.put('/language/:id', Language.UpdateLanguage);
router.delete('/language/:id', Language.RemoveLanguage);

//Objective
router.get('/objective/:idcv', Objective.GetAllObjective);
router.post('/objective', Objective.CreateObjective);
router.put('/objective/:id', Objective.UpdateObjective);
router.delete('/objective/:id', Objective.RemoveObjective);

//Organization
router.get('/organization/:idcv', Organization.GetAllOrganization);
router.post('/organization', Organization.CreateOrganization);
router.put('/organization/:id', Organization.UpdateOrganization);
router.delete('/organization/:id', Organization.RemoveOrganization);

//Project
router.get('/project/:idcv', Project.GetAllProject);
router.post('/project', Project.CreateProject);
router.put('/project/:id', Project.UpdateProject);
router.delete('/project/:id', Project.RemoveProject);

//Reference
router.get('/reference/:idcv', Reference.GetAllReference);
router.post('/reference', Reference.CreateReference);
router.put('/reference/:id', Reference.UpdateReference);
router.delete('/reference/:id', Reference.RemoveReference);

//Skill
router.get('/skill/:idcv', Skill.GetAllSkill);
router.post('/skill', Skill.CreateSkill);
router.put('/skill/:id', Skill.UpdateSkill);
router.delete('/skill/:id', Skill.RemoveSkill);

//Social
router.get('/social/:idcv', Social.GetAllSocial);
router.post('/social', Social.CreateSocial);
router.put('/social/:id', Social.UpdateSocial);
router.delete('/social/:id', Social.RemoveSocial);

module.exports = router;
