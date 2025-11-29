import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RobotGif from '../../assets/maki.gif';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = language === 'fr'
    ? "Bonjour ! 👋 Je suis l'assistant virtuel de Primices Intelligence. Comment puis-je vous aider aujourd'hui ?"
    : "Hello! 👋 I'm the virtual assistant of Primices Intelligence. How can I help you today?";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: welcomeMessage,
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (language === 'fr') {
      if (lowerInput.includes('bonjour') || lowerInput.includes('salut') || lowerInput.includes('hello')) {
        return "Bonjour ! Ravi de discuter avec vous. Comment puis-je vous assister aujourd'hui ?";
      }
      if (lowerInput.includes('prix') || lowerInput.includes('tarif') || lowerInput.includes('coût')) {
        return "Nos tarifs sont personnalisés selon vos besoins. Je vous invite à remplir le formulaire de contact pour obtenir un devis gratuit et détaillé.";
      }
      if (lowerInput.includes('service') || lowerInput.includes('offre')) {
        return "Nous proposons du développement web, des solutions IA, de l'analyse de données, et bien plus. Consultez notre page Services pour en savoir plus !";
      }
      if (lowerInput.includes('contact') || lowerInput.includes('joindre') || lowerInput.includes('téléphone')) {
        return "Vous pouvez nous contacter via notre formulaire de contact ou par email : contact@primicesintelligence.com";
      }
      if (lowerInput.includes('ia') || lowerInput.includes('intelligence artificielle') || lowerInput.includes('ai')) {
        return "Nous sommes spécialisés en solutions IA : chatbots intelligents, analyse prédictive, traitement du langage naturel, et bien plus encore !";
      }
      if (lowerInput.includes('délai') || lowerInput.includes('temps') || lowerInput.includes('durée')) {
        return "Les délais varient selon la complexité du projet. En général, un projet web prend entre 4 et 12 semaines. Contactez-nous pour une estimation précise.";
      }
      if (lowerInput.includes('merci')) {
        return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
      }
      return "Je comprends votre question. Pour une réponse précise et personnalisée, je vous invite à remplir notre formulaire de contact. Notre équipe vous répondra rapidement !";
    } else {
      if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        return "Hello! Nice to chat with you. How can I assist you today?";
      }
      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
        return "Our pricing is customized based on your needs. Please fill out our contact form to get a free detailed quote.";
      }
      if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        return "We offer web development, AI solutions, data analytics, and more. Check out our Services page to learn more!";
      }
      if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('phone')) {
        return "You can contact us via our contact form or by email: contact@primicesintelligence.com";
      }
      if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) {
        return "We specialize in AI solutions: intelligent chatbots, predictive analytics, natural language processing, and much more!";
      }
      if (lowerInput.includes('timeline') || lowerInput.includes('time') || lowerInput.includes('duration')) {
        return "Timelines vary based on project complexity. Generally, a web project takes 4-12 weeks. Contact us for a precise estimate.";
      }
      if (lowerInput.includes('thank')) {
        return "You're welcome! Feel free to ask if you have any other questions. 😊";
      }
      return "I understand your question. For a precise and personalized answer, please fill out our contact form. Our team will respond quickly!";
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse: Message = {
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="d-flex align-items-center gap-2">
            <img src={RobotGif} alt="Robot" className="chatbot-header-icon" />
            <div>
              <h6 className="mb-0 fw-semibold">Assistant Virtuel</h6>
              <small className="text-success">● En ligne</small>
            </div>
          </div>
          <button
            className="btn-close-chat"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le chat"
          >
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
            >
              <div className="message-bubble">
                {message.text}
              </div>
              <small className="message-time">
                {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </small>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="form-control"
          />
          <button
            className="btn-send"
            onClick={handleSend}
            aria-label="Envoyer"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Robot Icon */}
      <div
        className="chatbot-trigger"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
      >
        <img src={RobotGif} alt="Chat Assistant" />
        <div className="chatbot-badge">
          {language === 'fr' ? 'Besoin d\'aide ?' : 'Need help?'}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
