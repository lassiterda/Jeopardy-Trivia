//Data sctucture which holds the Categories, questions, and answers
var categories = [
  thisAndThat = {
                  column: "A",
                  title: "City by Football Club",
                  questions: [
                            {
                              row: "1",
                              question: "<h2>Chelsea, Arsenal, Crystal Palace</h2>",
                              value: 200,
                              answers: [
                                      {
                                        choice: "London",
                                        correct: true
                                      },
                                      {
                                        choice: "Liverpool",
                                        correct: false
                                      },
                                      {
                                        choice: "Manchester",
                                        correct: false
                                      },
                                      {
                                        choice: "Madrid",
                                        correct: false
                                      }]
                              },
                            {
                              row: "2",
                              question: "<h2>Galatasaray, Fenerbahce, Besiktas</h2>",
                              value:400,
                              answers: [
                                {
                                  choice: "Cologne",
                                  correct: false
                                },
                                {
                                  choice: "Oslo",
                                  correct: false
                                },
                                {
                                  choice: "Moscow",
                                  correct: false
                                },
                                {
                                  choice: "Istanbul",
                                  correct: true
                                }]
                            },
                            {
                              row: "3",
                              question: "<h2>Orlando Pirates, Kaizer Chiefs</h2>",
                              value: 600,
                              answers: [
                                {
                                  choice: "Orlando",
                                  correct: false
                                },
                                {
                                  choice: "Johannesburg",
                                  correct: true
                                },
                                {
                                  choice: "Nairobe",
                                  correct: false
                                },
                                {
                                  choice: "Tunis",
                                  correct: false
                                }]
                            },
                            {
                              row: "4",
                              question: "<h2>Spartak ______, CSKA ______</h2>",
                              value: 800,
                              answers: [
                                {
                                  choice: "Kiev",
                                  correct: false
                                },
                                {
                                  choice: "St. Petersburg",
                                  correct: false
                                },
                                {
                                  choice: "Moscow",
                                  correct: true
                                },
                                {
                                  choice: "Prague",
                                  correct: false
                                }]
                            },
                            {
                              row: "5",
                              question: "<h2>Partizan ________, Red Star ________</h2>",
                              value: 1000,
                              answers: [
                                {
                                  choice: "Belgrade",
                                  correct: true
                                },
                                {
                                  choice: "Athens",
                                  correct: true
                                },
                                {
                                  choice: "Warsaw",
                                  correct: false
                                },
                                {
                                  choice: "Vienna",
                                  correct: false
                                }]
                            }
                          ],
                },
                {
                  column: "B",
                  title: "The American Civil War",
                  questions: [
                                                {
                                                  row: "1",
                                                  question: "<h2>This pivotal battle holds the record as the bloddiest battle in American History</h2>",
                                                  value: 200,
                                                  answers: [
                                                          {
                                                            choice: "Shiloh",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Bull Run",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Gettysburg",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Antietam",
                                                            correct: false
                                                          }]
                                                  },
                                                {
                                                  row: "2",
                                                  question: "<h2>This famous general's last words were: 'Let us cross over the river and rest under the shade of the trees'</h2>",
                                                  value: 400,
                                                  answers: [
                                                    {
                                                      choice: "",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Stonewall Jackson",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Zachary Taylor",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Joseph Hooker",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "3",
                                                  question: "<h2>Civil War battles often had two names.  The Confederacy named battles after the a town, while the Union named them after the _______.</h2>",
                                                  value: 600,
                                                  answers: [
                                                    {
                                                      choice: "nearest Crossroads",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Nearest Mountain or ridge",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Nearest forest",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Nearest body of water",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "4",
                                                  question: "<h2>The percentage of the total US population that lost their lives during the War</h2>",
                                                  value: 800,
                                                  answers: [
                                                    {
                                                      choice: "2%",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "5%",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "10%",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "15%",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "5",
                                                  question: "<h2>During the Penisula Campaign, this Confederate General created the illusion of a much larger force by marching his soldiers in ant out of trees and hills</h2>",
                                                  value: 1000,
                                                  answers: [
                                                    {
                                                      choice: "Stonewall Jackson",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Josiah Pender",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "John Magruder",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Joseph Johnston",
                                                      correct: false
                                                    }]
                                                }
                  ]
                },
                {
                  column: "C",
                  title: "Countries by Shape",
                  questions: [
                                                {
                                                  row: "1",
                                                  question: "<img class='img img-responsive center-block' src='Assets/images/countryImages/country200.png' />",
                                                  value: 200,
                                                  answers: [
                                                          {
                                                            choice: "Norway",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Italy",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Chile",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Greece",
                                                            correct: false
                                                          }]
                                                  },
                                                {
                                                  row: "2",
                                                  question: "<img class='img img-responsive center-block' src='Assets/images/countryImages/country400.png' />",
                                                  value: 400,
                                                  answers: [
                                                    {
                                                      choice: "Ukraine",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Kazakstan",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "South Africa",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Sudan",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "3",
                                                  question: "<img class='img img-responsive center-block' src='Assets/images/countryImages/country600.png' />",
                                                  value: 600,
                                                  answers: [
                                                    {
                                                      choice: "Swaziland",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Thailand",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Vietnam",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Argentina",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "4",
                                                  question: "<img class='img img-responsive center-block' src='Assets/images/countryImages/country800.png' />",
                                                  value: 800,
                                                  answers: [
                                                    {
                                                      choice: "Iceland",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Greenland",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Turkmenistan",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Sierra Leone",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "5",
                                                  question: "<img class='img img-responsive center-block' src='Assets/images/countryImages/country1000.png' />",
                                                  value: 1000,
                                                  answers: [
                                                    {
                                                      choice: "Serbia",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Nepal",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Panama",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Paraguay",
                                                      correct: false
                                                    }]
                                                }
                  ]
                },
                {
                  column: "D",
                  title: "Famous Women in History",
                  questions: [
                                                {
                                                  row: "1",
                                                  question: "<h2>The Maid of Orléans</h2>",
                                                  value: 200,
                                                  answers: [
                                                          {
                                                            choice: "Joan of Arc",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Marie Curie",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Marie Antoinette",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Shirley Temple",
                                                            correct: false
                                                          }]
                                                  },
                                                {
                                                  row: "2",
                                                  question: "<h2>This Austrian-born Queen of France who met her end by guillotine in 1793</h2>",
                                                  value: 400,
                                                  answers: [
                                                    {
                                                      choice: "Catherine the Great",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Valentina Tereshkova",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Pauline Viardot",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Marie Antoinette",
                                                      correct: true
                                                    }]
                                                },
                                                {
                                                  row: "3",
                                                  question: "<h2>ThisActress who won an Oscar, Emmy, Grammy, and Tony award. Later on, she won the Presidential Medal of Freedom for her work as a UNICEF Goodwill Ambassador</2>",
                                                  value: 600,
                                                  answers: [
                                                    {
                                                      choice: "Shirley Temple",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Audrey Hepburn",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Lucille Ball",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Grace Kelly",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "4",
                                                  question: "<h2>Spanish queen who reorganized the governmental system, lowered the crime rate, and supported the financing of Christopher Columbus' voyage in 1492</h2>",
                                                  value: 800,
                                                  answers: [
                                                    {
                                                      choice: "Maria Anna",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Isabella I of Castille",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Maria Theresa of Spain",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Elanor of Castille",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                row: "5",
                                                question: "<h2>This English noble widely regarded as the first computer programmer</h2>",
                                                value: 1000,
                                                answers: [
                                                  {
                                                    choice: "Grace Hopper",
                                                    correct: false
                                                  },
                                                  {
                                                    choice: "Ada Lovelace",
                                                    correct: true
                                                  },
                                                  {
                                                    choice: "Vera Rubin",
                                                    correct: false
                                                  },
                                                  {
                                                    choice: "Laura Bassi",
                                                    correct: false
                                                  }]
                                                }
                  ]
                },
                {
                  column: "E",
                  title: "1980s Movie Quotes",
                  questions: [
                                                {
                                                  row: "1",
                                                  question: "<h2>Hello. My name is Inigo Montoya. You killed my father. Prepare to die</h2>",
                                                  value: 200,
                                                  answers: [
                                                          {
                                                            choice: "The Princess Bride",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Red Dawn",
                                                            correct: true
                                                          },
                                                          {
                                                            choice: "Highlander",
                                                            correct: false
                                                          },
                                                          {
                                                            choice: "Top Gun",
                                                            correct: false
                                                          }]
                                                  },
                                                {
                                                  row: "2",
                                                  question: "<h2>Strange things are afoot at the Cicle K</h2>",
                                                  value: 400,
                                                  answers: [
                                                    {
                                                      choice: "The Blues Brothers",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Crocodile Dundee",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Wayne's World",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Bill and Ted",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "3",
                                                  question: "<h2>Snakes.  Why'd it have to be Snakes?</h2>",
                                                  value: 600,
                                                  answers: [
                                                    {
                                                      choice: "Heathers",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Raiders of the Lost Ark",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Temple of Doom",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Romancing the Stone",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "4",
                                                  question: "<h2>Life goes by pretty fast. If you don't stop and look around once in a while, you could miss it</h2>",
                                                  value: 800,
                                                  answers: [
                                                    {
                                                      choice: "Breakfast Club",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "16 Candles",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Ferris Bueller",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "Pretty in Pink",
                                                      correct: false
                                                    }]
                                                },
                                                {
                                                  row: "5",
                                                  question: "<h2>The only thing we serve here is tongue! You boys like tongue?</h2>",
                                                  value: 1000,
                                                  answers: [
                                                    {
                                                      choice: "The Goonies",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Gremlins",
                                                      correct: true
                                                    },
                                                    {
                                                      choice: "Labyrinth",
                                                      correct: false
                                                    },
                                                    {
                                                      choice: "The Evil Dead",
                                                      correct: false
                                                    }]
                                                }
                  ]
                }
];
//concatAll function which flattens an nested array (array of arrays) by one dimension.
Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subarray) {
    subarray.forEach(function(item) {
      results.push(item);
    })
  })
  return results
};

//click handler which starts the game when play is clicked
$("#game-start").click (function() {
  $(".centered").css("backgroundColor", "#000");
  gameStart()
  $(this).unbind("click");
});

//click handler which resets the game when play is clicked
$("#game-reset").click (function() {
  gameStart();
  $("#score").css("color", "white");
});

//Click handler function which handles Data and DOM Manipulation when a question is clicked
$(".question-text").click(function() {
  //Hides the event target
  $(event.target).addClass("hidden");

  //Grabs the question based on the row and column values clicked
  currentQuestion = grabQuestion(event.target.getAttribute("column"),event.target.getAttribute("row"), categories);

  //sets the questtion text in the Modal
  $("#question-content").html(currentQuestion.question);

  //Displays the Answer choices in the correct buttons
  for(var i = 0; i < currentQuestion.answers.length; i++) {
    var answerEleArr = $(".answer-choice")
    //Sets the answer buttons to the answer currentQuestion's answer choices, as well as the "choice" value of each button element
    $(answerEleArr[i]).text(currentQuestion.answers[i].choice);
    $(answerEleArr[i]).attr("choice",currentQuestion.answers[i].choice)
  }

  //Opens the Modal after Data has been populated
  $('#Modal').modal({backdrop: 'static', keyboard: false});
  //starts the timer
  startQuestionTime();
});

//Click Hander which updates the score and stops the timer when the player chooses an answer
$(".answer-choice").click(function() {
  clearInterval(countdown)
  //checks to see if the User guessed the right answer, using filter to return the string of the correct answer
  if (this.getAttribute("choice") === currentQuestion.answers.filter(function(ans){ return ans.correct === true })[0].choice) {
    //update the score and close the Modal.
    score += currentQuestion.value
    $("#score").text("$ "+ score);
    $('#Modal').modal('toggle');
  }
  else {
    //update the score and close the Modal.
    score -= currentQuestion.value
    $("#score").text("$ "+ score);
    $('#Modal').modal('toggle');
  }

  //Changes the color of the Score if the number goes below/above $0.
  if (score < 0) {
    $("#score").css("color", "red");
  }
  else {
    $("#score").css("color", "white");
  }
});

//function to display question blocks whenver Play or Reset is clicked
var dispBlocks  = function () {
  //recursive function which iterates over the array provided, picks a ramdom element, and displays the corresponding 'question-text' element on the page
  function beepBoop(arr) {
    if (arr.length === 0) {
        return;
    }
    else {
      ele = Math.floor(Math.random() * arr.length)
        $("h2[column="+ arr[ele].column +"][row=" + arr[ele].row +"]").removeClass("hidden");
        arr.splice(ele, 1);
        setTimeout(beepBoop, 100, arr);
    }
  }
  //array of objects containing the row and column combinations of each question block
  var positionArr = categories.map(function(cat) {
    return cat.questions.map(function(q){
      return {column: cat.column, row: q.row}
    })
  }).concatAll();

  //array of category titles
  var categoryTitleArr = categories.map(function(cat){
    return cat.title;
  });
  //array of elements which will display the category
  var categoryEleArr = $(".category-text")
  //Loop to the category-text blocks each category title
   for (i = 0; i < categoryTitleArr.length; i++) {
     $(categoryEleArr[i]).text(categoryTitleArr[i]);
     $(categoryEleArr[i]).removeClass("hidden");
   }
  beepBoop(positionArr);
};
//function which returns a Question object based on the row and column values supplied.
function grabQuestion(colClicked,rowClicked, arr) {
   return arr.map(function(cat){
    return cat.questions.filter(function(q){
      return (cat.column === colClicked && q.row === rowClicked)
    })
  }).concatAll()[0];
}
//function which counts down
function startQuestionTime() {
  var time = 15;
  $("#time-remaining").text(time);
  countdown = setInterval(function() {
    time--;
    $("#time-remaining").text(time);
    if (time === 0) {
      //Stops the timer
      clearInterval(countdown)
      /// updated the score (as if user lost) and close the modal
      score -= currentQuestion.value
      $("#score").text("$ "+ score);
      $('#Modal').modal('toggle');
    }
  }, 1000)
}
//Function which starts the game, used for both Start and Reset Buttons.
function gameStart() {
    score = 0;
    $("#score").text("$ "+ score);
  dispBlocks()
};
