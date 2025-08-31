import { useState } from "react"

interface Question {
  label: string
  name: string
  options: string[]
}

interface WellnessSurveyModalProps {
  open: boolean
  onClose: () => void
}

interface Answers {
  [key: string]: string
}

const questions: Question[] = [
  {
    label: "1. क्या आप exercise या yoga करने के बाद अपनी fitness और energy level के बारे में पूरी तरह संतुष्ट महसूस करते हैं?",
    name: "q1",
    options: [
      "✓ हाँ, मैं पूरी तरह संतुष्ट हूँ",
      "✗ नहीं, पूरी तरह संतुष्ट नहीं महसूस करता/करती",
    ],
  },
  {
    label: "2. क्या आप अपने परिवार की health को बेहतर बनाने के लिए सक्रिय रूप से कोशिश कर रहे हैं?",
    name: "q2",
    options: [
      "✓ जी हाँ, पूरी कोशिश",
      "✗ कभी-कभार ही",
    ],
  },
  {
    label: "3. इतनी मेहनत के बावजूद भी क्या आपको लगता है कि आपके परिवार को वह ठोस परिणाम नहीं मिल रहे जिसकी उम्मीद थी?",
    name: "q3",
    options: [
      "✓ सही कहा, results slow हैं",
      "✗ नहीं, results अच्छे हैं",
    ],
  },
  {
    label: "4. क्या आप जानते हैं कि गलत quality का पानी आपके शरीर में toxins बढ़ाकर सभी wellness efforts को बर्बाद कर सकता है?",
    name: "q4",
    options: [
      "✓ जी हाँ, पता है",
      "✗ नहीं, यह नया है",
    ],
  },
  {
    label: "5. क्या आप अपने परिवार को pesticides-free भोजन देने के लिए कोई विशेष प्रयास कर रहे हैं?",
    name: "q5",
    options: [
      "✓ हाँ, organic खाना",
      "✗ नहीं, normal सब्जी",
    ],
  },
  {
    label: "6. क्या आप जानते हैं कि pesticides एक प्रकार का जहर है जो cancer, liver damage और गंभीर बीमारियाँ ला सकता है?",
    name: "q6",
    options: [
      "✓ जी हाँ, डरावना है",
      "✗ नहीं पता था",
    ],
  },
  {
    label: "7. क्या अभी आप या आपके जानने वाले परिवार/दोस्तों में कोई health issues face कर रहा है?",
    name: "q7",
    options: [
      "✓ जी हाँ, कुछ problems हैं",
      "✗ सभी ठीक हैं",
    ],
  },
  {
    label: "8. क्या आप उन्हें भी इस FREE wellness workshop के बारे में बताना चाहेंगे जो उनकी problems solve कर सकती है?",
    name: "q8",
    options: [
      "✓ जरूर, सबकी help करनी है",
      "✗ पहले खुद जानूंगा",
    ],
  },
  {
    label: "9. अगर मैं आपको बताऊं कि आप अपनी health improve कर सकें और साथ ही घर से harmful pesticides को भोजन से निकाल भी सकें - तो आप कब इसे जानना चाहेंगे?",
    name: "q9",
    options: [
      "🔥 अभी तुरंत!",
      "📅 जल्दी ही",
    ],
  },
  {
    label: "10. क्या आप अपने परिवार की health को next level पर ले जाने के लिए एक exclusive FREE workshop में participate करना चाहेंगे?",
    name: "q10",
    options: [
      "✓ जरूर, workshop चाहिए",
      "✗ फिलहाल नहीं",
    ],
  },
  {
    label: "11. आपका सबसे बड़ा concern क्या है - family की immediate health, daily energy levels, या future की बीमारियों से बचाव?",
    name: "q11",
    options: [
      "💚 Family की health",
      "🛡️ Future protection",
    ],
  },
]

export default function WellnessSurveyModal({ open, onClose }: WellnessSurveyModalProps) {
  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  if (!open) return null

  const handleOption = (name: string, value: string): void => {
    setAnswers({ ...answers, [name]: value })
  }

  const handleNext = (): void => setStep((s) => s + 1)
  const handlePrev = (): void => setStep((s) => (s > 0 ? s - 1 : 0))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setLoading(true)
    
    // Format WhatsApp message
    let msg = 'नमस्ते Tejesh जी! 🙏\n\nमैंने आपका wellness survey भरा है। यहाँ मेरे responses हैं:\n\n'
    questions.forEach((q, idx) => {
      msg += `${idx + 1}. ${answers[q.name] || ""}\n`
    })
    
    if (answers.q9 === "🔥 अभी तुरंत!") {
      msg += '\n[URGENT] मुझे तुरंत जानकारी चाहिए।\n'
    }
    
    msg += '\nकब मिल सकते हैं? Call या meet - जो भी convenient हो।'

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      window.open(
        `https://api.whatsapp.com/send?phone=918770343316&text=${encodeURIComponent(msg)}`, 
        "_blank"
      )
      setTimeout(() => onClose(), 3000)
    }, 1500)
  }

  const currentQuestion = questions[step]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white p-6 text-center rounded-t-lg">
          <h1 className="text-2xl font-bold">✨ Wellness Survey</h1>
          <p className="font-medium mt-1">
            आपकी सेहत की जानकारी के लिए कुछ सवाल
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Progress */}
          {!loading && !success && (
            <div className="p-4">
              <div className="text-sm text-gray-500 text-center mb-2">
                प्रश्न {step + 1} of {questions.length}
              </div>
              <div className="w-full h-2 bg-teal-100 rounded-full mb-4">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-300 to-teal-500 transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Questions */}
          {!loading && !success && currentQuestion && (
            <div className="px-6 pb-6">
              <div className="mb-6">
                <h2 className="font-semibold text-lg mb-4 leading-relaxed text-gray-800">
                  {currentQuestion.label}
                </h2>
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:border-teal-300 hover:bg-teal-25
                        ${answers[currentQuestion.name] === option
                          ? "border-teal-500 bg-teal-50 shadow-sm"
                          : "border-teal-100 bg-white"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name={currentQuestion.name}
                        value={option}
                        checked={answers[currentQuestion.name] === option}
                        onChange={() => handleOption(currentQuestion.name, option)}
                        className="accent-teal-500 w-4 h-4"
                      />
                      <span className="font-medium text-gray-700 flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-between pt-4 border-t border-gray-100">
                <button
                  type="button"
                  className={`px-6 py-3 border border-teal-200 text-teal-600 rounded-lg font-semibold transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 ${
                    step === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handlePrev}
                  disabled={step === 0}
                >
                  ⬅️ वापस
                </button>
                {step < questions.length - 1 ? (
                  <button
                    type="button"
                    className={`px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-teal-600 hover:shadow-md ${
                      !answers[currentQuestion.name] ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.name]}
                  >
                    आगे बढ़ें ➡️
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-teal-600 hover:shadow-md ${
                      !answers[currentQuestion.name] ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!answers[currentQuestion.name]}
                  >
                    ✅ सबमिट करें
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin mb-4" />
              <p className="text-gray-600">आपका response submit हो रहा है...</p>
            </div>
          )}

          {/* Success State */}
          {success && (
            <div className="text-center py-16 px-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-teal-600 mb-2">धन्यवाद!</h3>
              <p className="text-gray-600 leading-relaxed">
                आपका survey successfully submit हो गया है।<br />
                हम जल्द ही आपसे WhatsApp पर contact करेंगे।
              </p>
            </div>
          )}
        </form>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-teal-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-200"
          tabIndex={-1}
          aria-label="Close Survey"
        >
          ×
        </button>
      </div>
    </div>
  )
}
