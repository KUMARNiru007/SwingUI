 // First visit check using sessionStorage
      if (!sessionStorage.getItem('visited')) {
        // Trigger PartyJS confetti after slight delay
        setTimeout(() => {
          // Multiple bursts for better effect
          party.confetti(document.body, {
            count: party.variation.range(80, 100),
            spread: party.variation.range(30, 40),
            size: party.variation.range(0.8, 1.5)
          });
          
          setTimeout(() => {
            party.confetti(document.body, {
              count: party.variation.range(60, 80),
              spread: party.variation.range(40, 50),
              size: party.variation.range(0.6, 1.3)
            });
          }, 300);
          
          setTimeout(() => {
            party.confetti(document.body, {
              count: party.variation.range(40, 60),
              spread: party.variation.range(50, 60),
              size: party.variation.range(0.5, 1.2)
            });
          }, 600);
        }, 500);
        
        // Mark as visited
        sessionStorage.setItem('visited', 'true');
      }