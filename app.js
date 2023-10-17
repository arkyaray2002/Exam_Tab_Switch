// Function to show the popup and redirect when the tab is switched
        function tabSwitchHandler() {
            const notificationPopup = document.getElementById('notification');
            notificationPopup.style.display = 'block';

            // Redirect to the desired link (e.g., "https://example.com") after a delay
            setTimeout(function() {
                window.location.href = 'https://example.com';
            }, 2000); // 2000 milliseconds (2 seconds) delay before redirection
        }

        // Add an event listener to detect tab switch
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'hidden') {
                tabSwitchHandler();
            }
        });