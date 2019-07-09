var theStudent = {
    name: 'Andrew Sommer',
    address: "4505 Duval St, Austin, TX, 78751",
};
var date = "1/1/2018"
let props = {student: theStudent, date:date};

ReactDOM.render(
    <Student student={theStudent} date ="1/1/2019" />,
    document.getElementById("root")
);
 