const dataValidation = () => (req, res, next) => {
  const campuses = ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Mexico", "Sao Paulo", "Lisbon"];
  const courses = ["WebDev", "UX/UI", "Data Analytics"];
  const emailRegEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const { username, campus, course, password } = req.body;

  if (!campus || !course || !username || !password) return res.json({ status: "Please fill out all required fields" });

  const normalizedCampus = campus
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const validCampus = campuses.map(c => c.toLowerCase()).indexOf(normalizedCampus) !== -1;
  const validCourse = courses.map(c => c.toLowerCase()).indexOf(course.toLowerCase()) !== -1;
  const validUsername = emailRegEx.test(username);

  console.log(validUsername);

  const invalidMsg = (field, name) => `Invalid ${name}. Please select one of our ${field.length} ${name}es:${field.map(c => ` ${c}`)}. `;
  let response = "";

  if (!validCampus) response += invalidMsg(campuses, "campus");
  if (!validCourse) response += invalidMsg(courses, "course");
  if (!validUsername) response += `Please enter a valid email address.`;
  if (response !== "") return res.json({ status: response });
  else return next();
};

module.exports = dataValidation;
