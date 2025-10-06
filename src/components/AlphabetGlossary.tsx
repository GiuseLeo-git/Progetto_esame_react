import React, { useState } from 'react';
import './AlphabetGlossary.css';

interface Word {
  word: string;
  description: string;
  icon: string;
}

interface LetterSection {
  letter: string;
  words: Word[];
}

const AlphabetGlossary: React.FC = () => {
  const glossaryData: LetterSection[] = [
    {
      letter: 'A',
      words: [
        { word: 'App', description: 'Programma per smartphone o tablet che ti permette di fare cose specifiche (es. controllare la posta, navigare).', icon: '📱' },
        { word: 'Account', description: 'Il tuo profilo personale su un sito web o servizio online dove puoi accedere con username e password.', icon: '👤' },
        { word: 'Antivirus', description: 'Programma che protegge il tuo computer da virus e malware dannosi.', icon: '🛡️' },
        { word: 'Avatar', description: 'Immagine o rappresentazione grafica che ti rappresenta online.', icon: '🎭' },
        { word: 'Algoritmo', description: 'Serie di istruzioni che un computer segue per risolvere un problema o completare un compito.', icon: '⚙️' }
      ]
    },
    {
      letter: 'B',
      words: [
        { word: 'Browser', description: 'Programma per navigare su internet (es. Chrome, Firefox, Safari). È come una finestra per vedere i siti web.', icon: '🌐' },
        { word: 'Backup', description: 'Copia di sicurezza dei tuoi file importanti salvata in un posto sicuro.', icon: '💾' },
        { word: 'Bitcoin', description: 'Tipo di moneta digitale che esiste solo su internet.', icon: '₿' },
        { word: 'Blog', description: 'Sito web personale dove qualcuno scrive articoli e condivide pensieri.', icon: '📝' },
        { word: 'Bandwidth', description: 'La velocità con cui i dati viaggiano su internet, come la larghezza di una strada.', icon: '🚀' }
      ]
    },
    {
      letter: 'C',
      words: [
        { word: 'Cloud', description: 'Spazio di archiviazione su internet dove puoi salvare i tuoi file e accedervi da qualsiasi dispositivo.', icon: '☁️' },
        { word: 'Cookie', description: 'Piccoli file che i siti web salvano sul tuo computer per ricordare le tue preferenze.', icon: '🍪' },
        { word: 'Cache', description: 'Memoria temporanea dove il computer salva informazioni per accedervi più velocemente.', icon: '⚡' },
        { word: 'Chat', description: 'Conversazione in tempo reale con altre persone tramite messaggi scritti.', icon: '💬' },
        { word: 'Cybersecurity', description: 'Protezione dei computer e dei dati da attacchi e minacce online.', icon: '🔒' }
      ]
    },
    {
      letter: 'D',
      words: [
        { word: 'Download', description: 'Scaricare un file da internet sul tuo computer o smartphone.', icon: '⬇️' },
        { word: 'Database', description: 'Archivio digitale organizzato dove vengono salvate grandi quantità di informazioni.', icon: '🗄️' },
        { word: 'DNS', description: 'Sistema che traduce i nomi dei siti web in indirizzi numerici che i computer possono capire.', icon: '🌍' },
        { word: 'Driver', description: 'Programma che permette al computer di comunicare con hardware come stampanti o mouse.', icon: '🔧' },
        { word: 'Domain', description: 'Il nome unico di un sito web, come google.com o facebook.com.', icon: '🏠' }
      ]
    },
    {
      letter: 'E',
      words: [
        { word: 'Email', description: 'Posta elettronica: un modo per inviare e ricevere messaggi tramite internet.', icon: '📧' },
        { word: 'E-commerce', description: 'Acquisti e vendite effettuati tramite internet.', icon: '🛒' },
        { word: 'Encryption', description: 'Processo che rende i tuoi dati illeggibili a chi non ha il permesso di vederli.', icon: '🔐' },
        { word: 'Ethernet', description: 'Tipo di cavo che collega il computer a internet tramite una connessione fisica.', icon: '🔌' },
        { word: 'Extension', description: 'Piccolo programma che aggiunge funzionalità extra al tuo browser.', icon: '🧩' }
      ]
    },
    {
      letter: 'F',
      words: [
        { word: 'Firewall', description: 'Barriera di protezione che controlla il traffico di dati in entrata e uscita dal tuo computer.', icon: '🔥' },
        { word: 'Firmware', description: 'Software integrato nell\'hardware che controlla come funziona un dispositivo.', icon: '⚙️' },
        { word: 'FAQ', description: 'Domande frequenti e relative risposte su un argomento specifico.', icon: '❓' },
        { word: 'Feed', description: 'Flusso di contenuti aggiornati automaticamente, come i post sui social media.', icon: '📰' },
        { word: 'File', description: 'Documento, immagine, video o qualsiasi altro tipo di informazione salvata sul computer.', icon: '📄' }
      ]
    },
    {
      letter: 'G',
      words: [
        { word: 'GPS', description: 'Sistema di navigazione satellitare che ti dice dove ti trovi e come arrivare a destinazione.', icon: '🗺️' },
        { word: 'Gaming', description: 'Attività di giocare a videogiochi su computer, console o dispositivi mobili.', icon: '🎮' },
        { word: 'Gigabyte', description: 'Unità di misura per la quantità di dati, circa 1000 megabyte.', icon: '💽' },
        { word: 'GUI', description: 'Interfaccia grafica utente: il modo visivo di interagire con un programma usando icone e pulsanti.', icon: '🖥️' },
        { word: 'Gateway', description: 'Punto di accesso che collega due reti diverse, come la tua casa a internet.', icon: '🚪' }
      ]
    },
    {
      letter: 'H',
      words: [
        { word: 'Hacker', description: 'Persona esperta di computer che può accedere a sistemi informatici, a volte per scopi illegali.', icon: '👨‍💻' },
        { word: 'Hardware', description: 'Le parti fisiche del computer che puoi toccare, come monitor, tastiera e mouse.', icon: '🖥️' },
        { word: 'HTML', description: 'Linguaggio di programmazione usato per creare pagine web.', icon: '🌐' },
        { word: 'HTTP', description: 'Protocollo che permette ai browser di comunicare con i server web.', icon: '🔗' },
        { word: 'Hosting', description: 'Servizio che ospita il tuo sito web su internet rendendolo accessibile a tutti.', icon: '🏠' }
      ]
    },
    {
      letter: 'I',
      words: [
        { word: 'Internet', description: 'Rete globale di computer collegati che permette di condividere informazioni in tutto il mondo.', icon: '🌍' },
        { word: 'IP Address', description: 'Indirizzo numerico unico che identifica il tuo dispositivo su internet.', icon: '🔢' },
        { word: 'ISP', description: 'Fornitore di servizi internet: la compagnia che ti fornisce la connessione a internet.', icon: '📡' },
        { word: 'Interface', description: 'Il modo in cui interagisci con un programma o dispositivo, attraverso schermi e controlli.', icon: '🖱️' },
        { word: 'IoT', description: 'Internet delle cose: oggetti di uso quotidiano connessi a internet (frigoriferi, termostati, ecc.).', icon: '🏠' }
      ]
    },
    {
      letter: 'J',
      words: [
        { word: 'JavaScript', description: 'Linguaggio di programmazione usato per rendere le pagine web interattive e dinamiche.', icon: '⚡' },
        { word: 'JPEG', description: 'Formato di file per le immagini che comprime le foto per renderle più piccole.', icon: '🖼️' },
        { word: 'JSON', description: 'Formato per scambiare dati tra computer in modo leggibile e strutturato.', icon: '📋' },
        { word: 'Jailbreak', description: 'Processo per rimuovere le restrizioni su dispositivi come iPhone per installare app non autorizzate.', icon: '🔓' },
        { word: 'Java', description: 'Linguaggio di programmazione popolare usato per creare applicazioni e giochi.', icon: '☕' }
      ]
    },
    {
      letter: 'K',
      words: [
        { word: 'Keyboard', description: 'Tastiera: dispositivo per inserire testo e comandi nel computer.', icon: '⌨️' },
        { word: 'Kernel', description: 'Il cuore del sistema operativo che gestisce le risorse del computer.', icon: '💎' },
        { word: 'Kilobyte', description: 'Unità di misura per i dati, circa 1000 byte.', icon: '📊' },
        { word: 'Kiosk', description: 'Computer pubblico in luoghi come aeroporti o centri commerciali per accedere a servizi.', icon: '🖥️' },
        { word: 'KVM', description: 'Dispositivo che permette di controllare più computer con una sola tastiera, mouse e monitor.', icon: '🔄' }
      ]
    },
    {
      letter: 'L',
      words: [
        { word: 'Link', description: 'Collegamento cliccabile che ti porta da una pagina web a un\'altra.', icon: '🔗' },
        { word: 'LAN', description: 'Rete locale: connessione tra computer nella stessa area (casa, ufficio).', icon: '🏠' },
        { word: 'Linux', description: 'Sistema operativo gratuito e open source alternativo a Windows e Mac.', icon: '🐧' },
        { word: 'Login', description: 'Processo di accesso a un account online inserendo username e password.', icon: '🔑' },
        { word: 'Laptop', description: 'Computer portatile che puoi portare ovunque.', icon: '💻' }
      ]
    },
    {
      letter: 'M',
      words: [
        { word: 'Malware', description: 'Software dannoso progettato per danneggiare o rubare informazioni dal tuo computer.', icon: '🦠' },
        { word: 'Megabyte', description: 'Unità di misura per i dati, circa 1000 kilobyte.', icon: '💾' },
        { word: 'Modem', description: 'Dispositivo che converte i segnali digitali per la connessione a internet.', icon: '📡' },
        { word: 'Mouse', description: 'Dispositivo di puntamento che ti permette di controllare il cursore sullo schermo.', icon: '🖱️' },
        { word: 'Monitor', description: 'Lo schermo del computer dove vedi le immagini e i testi.', icon: '🖥️' }
      ]
    },
    {
      letter: 'N',
      words: [
        { word: 'Network', description: 'Rete di computer collegati che possono condividere informazioni e risorse.', icon: '🌐' },
        { word: 'Node', description: 'Punto di connessione in una rete, come un computer o un router.', icon: '🔗' },
        { word: 'NFC', description: 'Comunicazione a campo ravvicinato: tecnologia per scambiare dati tra dispositivi vicini.', icon: '📱' },
        { word: 'NIC', description: 'Scheda di rete: componente hardware che permette al computer di connettersi a una rete.', icon: '🔌' },
        { word: 'NAT', description: 'Traduzione degli indirizzi di rete: tecnica per condividere una connessione internet tra più dispositivi.', icon: '🔄' }
      ]
    },
    {
      letter: 'O',
      words: [
        { word: 'Operating System', description: 'Sistema operativo: il software principale che gestisce il computer (Windows, Mac, Linux).', icon: '💻' },
        { word: 'Online', description: 'Connesso a internet o disponibile tramite internet.', icon: '🌐' },
        { word: 'Offline', description: 'Non connesso a internet o non disponibile tramite internet.', icon: '📴' },
        { word: 'Open Source', description: 'Software il cui codice sorgente è disponibile gratuitamente per tutti.', icon: '🔓' },
        { word: 'OS', description: 'Abbreviazione di Operating System (sistema operativo).', icon: '⚙️' }
      ]
    },
    {
      letter: 'P',
      words: [
        { word: 'Password', description: 'Parola segreta che usi per accedere ai tuoi account online.', icon: '🔐' },
        { word: 'Phishing', description: 'Tentativo di rubare informazioni personali fingendo di essere un\'organizzazione affidabile.', icon: '🎣' },
        { word: 'Pixel', description: 'Il più piccolo punto di un\'immagine digitale sullo schermo.', icon: '🔲' },
        { word: 'PDF', description: 'Formato di documento che mantiene la formattazione originale su qualsiasi dispositivo.', icon: '📄' },
        { word: 'Plugin', description: 'Componente aggiuntivo che estende le funzionalità di un programma.', icon: '🧩' }
      ]
    },
    {
      letter: 'Q',
      words: [
        { word: 'QR Code', description: 'Codice a barre quadrato che può essere scansionato con lo smartphone per accedere a informazioni.', icon: '📱' },
        { word: 'Query', description: 'Domanda o richiesta di informazioni fatta a un database o motore di ricerca.', icon: '❓' },
        { word: 'Queue', description: 'Coda: lista di compiti o processi in attesa di essere eseguiti dal computer.', icon: '📋' },
        { word: 'Quality', description: 'Qualità: misura di quanto bene funziona un software o servizio.', icon: '⭐' },
        { word: 'Quick Access', description: 'Accesso rapido: scorciatoia per accedere velocemente a file o programmi usati di frequente.', icon: '⚡' }
      ]
    },
    {
      letter: 'R',
      words: [
        { word: 'RAM', description: 'Memoria temporanea del computer dove vengono caricati i programmi mentre li usi.', icon: '🧠' },
        { word: 'Router', description: 'Dispositivo che dirige il traffico internet tra i tuoi dispositivi e il web.', icon: '📡' },
        { word: 'Resolution', description: 'Risoluzione: numero di pixel che compongono un\'immagine o schermo.', icon: '🖼️' },
        { word: 'ROM', description: 'Memoria di sola lettura: memoria permanente che non può essere modificata.', icon: '💾' },
        { word: 'RSS', description: 'Formato per ricevere aggiornamenti automatici da siti web e blog.', icon: '📰' }
      ]
    },
    {
      letter: 'S',
      words: [
        { word: 'Social Network', description: 'Piattaforma online dove puoi connetterti con amici e familiari (es. Facebook, WhatsApp).', icon: '👥' },
        { word: 'Software', description: 'Programmi e applicazioni che fanno funzionare il computer.', icon: '💿' },
        { word: 'Server', description: 'Computer potente che fornisce servizi e dati ad altri computer nella rete.', icon: '🖥️' },
        { word: 'Spam', description: 'Messaggi indesiderati, solitamente pubblicità, inviati in massa via email.', icon: '📧' },
        { word: 'Streaming', description: 'Riproduzione di video o audio in tempo reale senza scaricare il file completo.', icon: '📺' }
      ]
    },
    {
      letter: 'T',
      words: [
        { word: 'Tablet', description: 'Dispositivo touchscreen portatile più grande di uno smartphone ma più piccolo di un laptop.', icon: '📱' },
        { word: 'Trojan', description: 'Tipo di malware che si nasconde in programmi apparentemente innocui.', icon: '🐴' },
        { word: 'Torrent', description: 'Metodo per condividere file peer-to-peer su internet.', icon: '🌊' },
        { word: 'Touchscreen', description: 'Schermo che risponde al tocco delle dita per controllare il dispositivo.', icon: '👆' },
        { word: 'TLS', description: 'Protocollo di sicurezza che protegge le comunicazioni su internet.', icon: '🔒' }
      ]
    },
    {
      letter: 'U',
      words: [
        { word: 'Upload', description: 'Caricare un file dal tuo computer su internet o su un altro dispositivo.', icon: '⬆️' },
        { word: 'URL', description: 'Indirizzo web che identifica una pagina specifica su internet.', icon: '🌐' },
        { word: 'USB', description: 'Tipo di connessione universale per collegare dispositivi al computer.', icon: '🔌' },
        { word: 'Username', description: 'Nome utente: l\'identificativo che usi per accedere ai tuoi account online.', icon: '👤' },
        { word: 'UX', description: 'Esperienza utente: come una persona interagisce e si sente usando un prodotto digitale.', icon: '😊' }
      ]
    },
    {
      letter: 'V',
      words: [
        { word: 'Virus', description: 'Programma dannoso che si replica e si diffonde tra i computer.', icon: '🦠' },
        { word: 'VPN', description: 'Rete privata virtuale: servizio che protegge la tua privacy online nascondendo la tua posizione.', icon: '🔒' },
        { word: 'VoIP', description: 'Chiamate telefoniche effettuate tramite internet invece che tramite linee telefoniche tradizionali.', icon: '📞' },
        { word: 'VR', description: 'Realtà virtuale: tecnologia che crea un ambiente digitale immersivo.', icon: '🥽' },
        { word: 'VGA', description: 'Standard per la connessione di monitor al computer.', icon: '🖥️' }
      ]
    },
    {
      letter: 'W',
      words: [
        { word: 'WiFi', description: 'Tecnologia wireless che permette ai dispositivi di connettersi a internet senza cavi.', icon: '📶' },
        { word: 'Website', description: 'Sito web: collezione di pagine collegate accessibili tramite internet.', icon: '🌐' },
        { word: 'Worm', description: 'Tipo di malware che si diffonde automaticamente tra i computer.', icon: '🐛' },
        { word: 'WAN', description: 'Rete geografica: connessione tra computer in aree geografiche diverse.', icon: '🌍' },
        { word: 'Widget', description: 'Piccolo componente grafico che fornisce informazioni o funzionalità specifiche.', icon: '🧩' }
      ]
    },
    {
      letter: 'X',
      words: [
        { word: 'XML', description: 'Linguaggio di markup per strutturare e trasportare dati tra sistemi diversi.', icon: '📋' },
        { word: 'XSS', description: 'Cross-site scripting: tipo di attacco che inietta script dannosi in pagine web.', icon: '⚠️' },
        { word: 'Xbox', description: 'Console di gioco prodotta da Microsoft.', icon: '🎮' },
        { word: 'X86', description: 'Architettura di processore usata nella maggior parte dei computer desktop e laptop.', icon: '💻' },
        { word: 'XHTML', description: 'Versione più rigorosa di HTML che segue le regole XML.', icon: '🌐' }
      ]
    },
    {
      letter: 'Y',
      words: [
        { word: 'YouTube', description: 'Piattaforma online per condividere e guardare video.', icon: '📺' },
        { word: 'Yahoo', description: 'Portale web e motore di ricerca popolare.', icon: '🔍' },
        { word: 'Y2K', description: 'Problema dell\'anno 2000: preoccupazione per i computer che non potevano gestire l\'anno 2000.', icon: '📅' },
        { word: 'YAML', description: 'Formato per la configurazione di file leggibile dall\'uomo.', icon: '📝' },
        { word: 'Yottabyte', description: 'Unità di misura per i dati, circa 1000 zettabyte (enorme quantità di dati).', icon: '💾' }
      ]
    },
    {
      letter: 'Z',
      words: [
        { word: 'ZIP', description: 'Formato di compressione che riduce le dimensioni dei file per risparmiare spazio.', icon: '📦' },
        { word: 'Zombie', description: 'Computer infetto che può essere controllato a distanza senza che il proprietario lo sappia.', icon: '🧟' },
        { word: 'Zero-day', description: 'Vulnerabilità di sicurezza sconosciuta che non ha ancora una soluzione.', icon: '⚠️' },
        { word: 'Zettabyte', description: 'Unità di misura per i dati, circa 1000 exabyte (quantità enorme di dati).', icon: '💾' },
        { word: 'Zigbee', description: 'Standard di comunicazione wireless per dispositivi smart home.', icon: '🏠' }
      ]
    }
  ];

  const [expandedWords, setExpandedWords] = useState<{[letter: string]: string}>(() => {
    // Inizializza con il primo termine di ogni lettera attivo
    const initial: {[letter: string]: string} = {};
    glossaryData.forEach(section => {
      if (section.words.length > 0) {
        initial[section.letter] = section.words[0].word;
      }
    });
    return initial;
  });

  const toggleWord = (letter: string, word: string) => {
    setExpandedWords(prev => ({
      ...prev,
      [letter]: word
    }));
  };

  return (
    <div className="alphabet-glossary">
      {glossaryData.map((section) => (
        <div key={section.letter} className="letter-section">
          <div className="letter-container">
            <div className="letter-display">
              <span className="letter">{section.letter}</span>
            </div>
            
            <div className="words-list">
              {section.words.map((word) => (
                <div 
                  key={word.word} 
                  className={`word-item ${expandedWords[section.letter] === word.word ? 'active' : ''}`}
                  onClick={() => toggleWord(section.letter, word.word)}
                >
                  <span className="word-text">{word.word}</span>
                </div>
              ))}
            </div>
            
            <div className="definition-area">
              {expandedWords[section.letter] && section.words.find(w => w.word === expandedWords[section.letter]) && (
                <div className="definition">
                  <h3 className="definition-title">
                    {expandedWords[section.letter]}: <span className="definition-subtitle">s. ing. –</span>
                  </h3>
                  <p className="definition-text">
                    {section.words.find(w => w.word === expandedWords[section.letter])?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlphabetGlossary;
