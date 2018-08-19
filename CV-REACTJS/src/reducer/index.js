import { combineReducers } from 'redux';
import award from './award';
import idcv from './idcv';
import language from './language';
import certificate from './certificate';
import education from './education';
// import social from './social';
// import skill from './skill';
import objective from './objective';
import organization from './organization';
// import project from './project';
// import reference from './reference';
import info from './info';

const appReducers = combineReducers({
    language,
    award,
    idcv,
    certificate,
    education,
    objective,
    organization,
    // project,
    // reference,
    // skill,
    // social,
    info

});

export default appReducers;
