import api from "./api";

const getMyScore = () => {
  return api
    .get(`${api.url.home}/Dashbroad/YourScore`)
    .then((res: any) => res.data);
};

const getComonMistake = (type: number) => {
  return api
    .get(`${api.url.home}/Dashbroad/CommomMistakes?CommonMistakeType=${type}`)
    .then((res: any) => res.data);
};

const getScoreHistory = () => {
  return api
    .get(`${api.url.home}/Dashbroad/ScoringHistory`)
    .then((res) => res.data);
};

const getAllCommonMistake = () => {
  return api
    .get(`${api.url.home}/Dashbroad/GetAllCommomMistakes`)
    .then((res) => res.data);
};

const getBookmarkQuestion = (type: number) => {
  return api.get(`${api.url.home}/Dashbroad/GetBookmarkQuestion?LessonType=${type}`).then(res => res.data);
};

const homeService = {
  getMyScore,
  getComonMistake,
  getScoreHistory,
  getAllCommonMistake,
  getBookmarkQuestion
};

export default homeService;
