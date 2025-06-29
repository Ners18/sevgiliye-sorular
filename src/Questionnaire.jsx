import React, { useState } from "react";
import "./LoveQuiz.css";
import Resim1 from "./images/Resim1.jpeg";
import Resim2 from "./images/Resim2.jpeg";
import Resim3 from "./images/Resim3.jpeg";
import Resim4 from "./images/Resim4.jpeg";
import Resim5 from "./images/Resim5.jpeg";
import Resim6 from "./images/Resim6.jpeg";
import Resim7 from "./images/Resim7.jpeg";
import Resim8 from "./images/Resim8.jpeg";
import Resim9 from "./images/Resim9.jpeg";
import Resim10 from "./images/Resim10.jpeg";

function Questionnaire() {
  const [stage, setStage] = useState("ready");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const questions = [
    {
      question: "Ilk nerede bir birimizi gördük?",
      options: ["Okulda", "Random Sokakta", "kebabcıda", "Sanayide"],
      correctAnswer: "kebabcıda",
      image: Resim1,
    },
    {
      question: "İlk tanışdıgımız yerde ben ne yiyordum?",
      options: ["Ciger", "Et şiş", "Tavuk Şiş", "Şeftali"],
      correctAnswer: "Et şiş",
      image: Resim2,
    },
    {
      question: "Birlikde gitdigimiz ilk könser?",
      options: [
        "Ankara konserleri",
        "Tuzla konserleri",
        "İskele konserleri",
        "Lefkoşa Konserleri",
      ],
      correctAnswer: "Ankara konserleri",
      image: Resim3,
    },
    {
      question: "Seni benden fazla seven kim var?",
      options: ["Ben", "Nersan", "Baban", "NERSAN"],
      correctAnswer: "NERSAN",
      image: Resim4,
    },
    {
      question: "Birlikde geçirdigimiz ilk geceyi hatırlıyormusun ??",
      options: ["Evet", "Hayır", "Biraz", "Unutdum bile"],
      correctAnswer: "Evet",
      image: Resim5,
    },
    {
      question: "Benim en sevdigim yemek?",
      options: ["Kebap", "Hamburger", "Fırın Makarnası", "Köfde"],
      correctAnswer: "Fırın Makarnası",
      image: Resim6,
    },
    {
      question: "Birlikde en çok gitmek istediğimiz yer neresi?",
      options: ["Türkiye", "Italya", "Fransa", "Asya Ülkeleri"],
      correctAnswer: "Asya Ülkeleri",
      image: Resim7,
    },
    {
      question: "Birlikde en fazla yapmak isdedigimiz aktivite?",
      options: [
        "Uyuku",
        "Yemek Yemek",
        "Sabahlara kadar sohbet etmek",
        "Dünyayı gezmek",
      ],
      correctAnswer: "Dünyayı gezmek",
      image: Resim8,
    },
    {
      question: "En sevdiğimiz ortak film hangisi?",
      options: ["Interstellar", "Medcezir", "Lost", "Crown"],
      correctAnswer: "Medcezir",
      image: Resim9,
    },
    {
      question: "Beni en çok ne zaman güldürüyorsun?",
      options: [
        "Beni kıdıkladıgında",
        "Maskaralık yapdıgında",
        "Uygunsuz şaka yapdıgında",
        "Beklenmedik şeyler yaptığında",
      ],
      correctAnswer: "Beklenmedik şeyler yaptığında",
      image: Resim10,
    },
  ];

  const resultMessages = {
    0: {
      text: "Yazıklar olsun gonuşma benimnan, hiç bir şey bilmiyorsun! 😢",
      image: Resim1,
    },
    1: {
      text: "ne ara - ne yaz - ne de bir şey yap  😢",
      image: Resim2,
    },
    2: {
      text: "Beceriksizsin ama yine de seni seviyorum! ❤️",
      image: Resim3,
    },
    3: {
      text: "ppiiiiiiuuuuuuuu pepepepepepepepe yazıkkkk",
      image: Resim4,
    },
    4: {
      text: "daha yarısını bile bilmen pu (tükürme sesi)",
      image: Resim5,
    },
    5: {
      text: "en azından yarını bildin ama daha çok çalışmalısın! 😅",
      image: Resim6,
    },
    6: {
      text: "eh işde bekledigimden çok düşük bir puan ama yine de seni seviyorum! ❤️",
      image: Resim7,
    },
    7: {
      text: "Geliyon ha bir yere bravooo ❤️",
      image: Resim8,
    },
    8: {
      text: "10 da 8 bekledigimden çok düşük ama yine de seni seviyorum! ❤️",
      image: Resim9,
    },
    9: {
      text: "Afferim aşkımm biraz beni tanıyorsun ballı böregimmm ❤️",
      image: Resim10,
    },
    10: {
      text: "Yani daha azını beklemiyordum, seninle her şeyi biliyorum aşkımm! ❤️",
      image: Resim10,
    },
  };

  const handleStart = () => {
    setStage("quiz");
    setCurrentQuestion(0); // Ensure we start at the first question
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    setShowImage(true);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
    setTimeout(() => {
      setShowImage(false);
      setSelectedAnswer(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1); // Move to next question
      } else {
        setStage("results"); // Show results when all questions are answered
      }
    }, 2000);
  };

  const handlePlayAgain = () => {
    setStage("ready");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowImage(false);
    setCorrectCount(0);
    setWrongCount(0);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {stage === "ready" && (
          <>
            <h1 className="quiz-title">Hazırmısın benim aşkilattamm?</h1>
            <p className="quiz-question">
              Bakalım bu ilişkiye ne kadar hakimsin ?{" "}
              <span className="heart">❤️</span>
            </p>
            <button className="quiz-button" onClick={handleStart}>
              Hazırım aşkımmm
            </button>
          </>
        )}
        {stage === "quiz" && currentQuestion < questions.length && (
          <>
            <h1 className="quiz-title">Bizim aşk sınavımız</h1>
            <p className="quiz-question">
              {questions[currentQuestion].question}
            </p>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-button ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {showImage && (
              <div className="quiz-image-container">
                <img
                  src={questions[currentQuestion].image}
                  alt="Romantic memory"
                  className="quiz-image"
                />
                <p className="quiz-message">
                  {selectedAnswer === questions[currentQuestion].correctAnswer
                    ? "Afferim benim akıllı sevgilim dogru yapdın ❤️"
                    : "amaaaa hatalı yapdın bebegim daha iyi düşünn! ❤️"}
                </p>
              </div>
            )}
          </>
        )}
        {stage === "results" && (
          <div className="quiz-card">
            <h1 className="quiz-title">Quiz Complete!</h1>
            <p className="quiz-question">
              {questions.length} da {correctCount} yeptın aşkilattamm{" "}
              {wrongCount} yanlış ceavap.
            </p>
            <p className="quiz-message">
              {resultMessages[correctCount]?.text ||
                "You're amazing, and I love you endlessly! ❤️"}
            </p>
            <img
              src={resultMessages[correctCount]?.image}
              alt="Results image"
              className="quiz-image fade-in"
            />
            <button className="quiz-button" onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
