$("form#quizForm").submit(function(event) {
  event.preventDefault();


const beverage = $("input:radio[name=beverage]:checked").val();
const pizza = $("input:radio[name=pizza]:checked").val();
const awake = $("input:radio[name=awake]:checked").val();
const pet = $("input:radio[name=pet]:checked").val();
const plants = $("input:radio[name=plants]:checked").val();
