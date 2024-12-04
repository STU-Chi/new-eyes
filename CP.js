document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            displayTerminalOutput();
            input.value = ''; 
        }
    });

    // 用于打字效果
    function typeEffect(element, message, speed = 20) {
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i); 
                i++;
                setTimeout(typeWriter, speed); 
            }
        }
        typeWriter(); 
    }

    function displayTerminalOutput() {
        if (input.value.trim() === '') {
            return; 
        }

        if (input.value.trim() === 'DrEdmund') {
            output.innerHTML = ''; 
            loadCmdJs();
        }

        const centralDomain = document.createElement('span');
        centralDomain.style.color = '#20C20E';
        centralDomain.textContent = "\nCENTRAL DOMAIN";
        output.appendChild(centralDomain);

        const line = document.createElement('div');
        line.style.display = 'flex'; 

        const prompt = document.createElement('span');
        prompt.style.color = '#20C20E';
        prompt.textContent = "$ ";

        const userInput = document.createElement('span');
        userInput.style.color = 'orange';
        userInput.textContent = input.value; 

        line.appendChild(prompt);
        line.appendChild(userInput);
        output.appendChild(line);

        const systemMessage = input.value.trim() === 'DrEdmund' 
            ? "[System reset. Welcome...]" 
            : "[Connection refused]";

        setTimeout(() => {
            const terminated = document.createElement('span');
            terminated.style.color = 'white';
            typeEffect(terminated, systemMessage, 20);
            output.appendChild(terminated);
        }, input.value.length * 10+ 35); 
        output.scrollTop = output.scrollHeight;
    }

    function loadCmdJs() {
        const script = document.createElement('script');
        script.src = 'cmd.js'; 
        script.onload = function () {
            startCmdSimulation();
        };
        document.body.appendChild(script);
    }
});

