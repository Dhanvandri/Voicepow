if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
  
    let isListening = false;
  
    recognition.onresult = event => {
      const results = event.results;
      for (let i = event.resultIndex; i < results.length; i++) {
        const transcript = results[i][0].transcript.trim().toLowerCase();
  
        if (transcript === 'start now') {
          isListening = true;
          console.log('Speech recognition started');
        }
  
        if (isListening) {
          if (transcript === 'go to bangalore') {
            window.location.href = 'https://earth.google.com/web/@12.96989005,77.59537125,933.82180564a,4959.58684115d,35y,0h,0t,0r/data=ClMaURJLCiUweDNiYWUxNjcwYzliNDRlNmQ6MHhmOGRmYzNlODUxN2U0ZmUwKiJCZW5nYWx1cnUK4LKs4LOG4LKC4LKX4LKz4LOC4LKw4LOBGAIgAQ';
          }
            
            else if (transcript === 'go to mysore') {
                window.location.href = 'https://earth.google.com/web/@12.31028808,76.65428753,777.8431097a,12044.89849281d,35y,0h,0t,0r/data=CkoaSBJCCiUweDNiYWY3MDM4MWQ1NzJlZjk6MHgyYjg5ZWNlOGMwZjgzOTZkKhlNeXN1cnUK4LKu4LOI4LK44LOC4LKw4LOBGAIgAQ';
            }
        
            else if (transcript === 'scroll down') {
            window.scrollBy(0, 200);
          }
            else if (transcript === 'scroll up') {
            window.scrollBy(0,-200);
          }
          else if (transcript === 'after submit'){
            const x=document.getElementById('submit')
            x.click()
          }
          else if(transcript === 'stop now'){
            alert('Stopping services now!')
            console.log('Stopping services now!')
            recognition.abort()
          }
          else if(transcript === 'reset'){
            const y=document.getElementById('reset')
            y.click()
          }
          else if(transcript === 'online payment'){
            const z=document.getElementById('online')
            z.click()
          }
          else if(transcript === 'cash payment'){
            const q=document.getElementById('offline')
            q.click()
          }
          else if(transcript === 'complete payment'){
            const p=document.getElementById('submitbtn')
            p.click()
          }
          else if (transcript === 'to the top'){
            window.scrollTo(0,0)
          }
          else if(transcript === 'to the bottom'){
            window.scrollTo(0,document.body.scrollHeight)
          }
          else if(transcript === 'add passenger') { 
          const l=document.getElementById('increment-btn')
          l.click()
          }
          else if(transcript === 'remove passenger') { 
          const n=document.getElementById('decrement-btn')
          n.click()
          }
          else if(transcript === 'clear input') { 
          const h=document.getElementById('clear')
          h.click()
          }
        }
      }
    };
    
  
    recognition.onend = () => {
      if (!isListening) {
        recognition.start();
      }
      else{
        alert('Speech not recognised')
      }
      
    };
  
    recognition.start();
} 
else {
    console.error('Speech recognition not supported in this browser');
  }
  
  
  