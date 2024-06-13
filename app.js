
        document.addEventListener("DOMContentLoaded", function() {
            const events = [
                { date: '2024-06-05', title: 'Community Clean-Up' },
                { date: '2024-06-12', title: 'Recycling Workshop' },
                { date: '2024-06-18', title: 'Tree Planting Event' }
            ];
    
            events.forEach(event => {
                const date = new Date(event.date);
                const day = date.getDate();
                const dayElement = document.querySelector(`.day .date:contains('${day}')`).parentElement;
                if (dayElement) {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event');
                    eventElement.textContent = event.title;
                    dayElement.appendChild(eventElement);
                }
            });
        });
    