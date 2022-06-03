$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();

const beverageInput = $("input:radio[name=beverage]:checked").val();
const pizzaInput = $("input:radio[name=pizza]:checked").val();
const awakeInput = $("input:radio[name=awake]:checked").val();
const petInput = $("input:radio[name=pet]:checked").val();
const plantsInput = $("input:radio[name=plants]:checked").val();

if (beverageInput === 'water' || pizzaInput === 'noPineapple') {
  $('.output').text('C# is the language for you!');
} else if (awakeInput === 'nightOwl' || petInput === 'cat') {
  $('.output').text('Time for you to learn Ruby!');
} else {
  $('.output').text('Get ready to have some fun with JavaScript!');
}

  });
});
