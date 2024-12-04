function startCmdSimulation() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    input.style.display = 'none';
    
    const loadingMessage = document.createElement('div');
    loadingMessage.style.color = 'white';
    typeEffect(loadingMessage, "Loading system... Please wait.", 20);
    output.appendChild(loadingMessage);

    setTimeout(() => {
        output.appendChild(document.createElement('br'));
        typeEffect(output, "System Initialized. Type 'help' for commands.\n", 20);

        setTimeout(() => {
            output.appendChild(document.createElement('br'));
            showCommandPrompt(); 
        }, 1500); 
    }, 2000); 
}

function updateOutputMargin() {
    const output = document.getElementById('output');
    if (output) {
        output.style.marginTop = '5px';
        output.style.maxHeight = '96%';
    }
}

updateOutputMargin();

function showCommandPrompt() {
    const output = document.getElementById('output');

    const line = document.createElement('div');
    line.style.display = 'flex'; 

    const prompt = document.createElement('span');
    prompt.style.color = '#20C20E';
    prompt.textContent = "$ ";

    const dynamicInput = document.createElement('input');
    dynamicInput.type = 'text';
    dynamicInput.style.background = 'black';
    dynamicInput.style.color = 'orange';
    dynamicInput.style.border = 'none';
    dynamicInput.style.outline = 'none';
    dynamicInput.style.fontFamily = 'monospace';
    dynamicInput.style.fontSize = '1.2em';
    dynamicInput.autocomplete = 'off';

    dynamicInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(dynamicInput.value); 
            dynamicInput.remove(); 
        }
    });

    line.appendChild(prompt);
    line.appendChild(dynamicInput);
    output.appendChild(line);
    dynamicInput.focus(); 
}

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

function processCommand(command) {
    const output = document.getElementById('output');

    if (command.trim() === '') {
        stop.output.removeChild(lastInputRow);
        return
    }

    const lastInputRow = output.lastChild;
    if (lastInputRow && lastInputRow.tagName === 'DIV') {
        output.removeChild(lastInputRow);
    }

    const line = document.createElement('div');
    line.style.display = 'flex';

    const prompt = document.createElement('span');
    prompt.style.color = '#20C20E';
    prompt.textContent = "$ ";

    const userInput = document.createElement('span');
    userInput.style.color = 'orange';
    userInput.textContent = command;

    line.appendChild(prompt);
    line.appendChild(userInput);
    output.appendChild(line);

    if (command === 'help') {
        showHelp();
    } else if (command === 'status') {
        showStatus();
    } else if (command === 'Lucain') {
        showLucain();
    } else {
        showUnknownCommand();
    }

    output.appendChild(document.createElement('br'));
    showCommandPrompt();
}

function showCommandPrompt() {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.style.display = 'flex'; 

    const prompt = document.createElement('span');
    prompt.style.color = '#20C20E';
    prompt.textContent = "$ ";

    const dynamicInput = document.createElement('input');
    dynamicInput.type = 'text';
    dynamicInput.style.background = 'black';
    dynamicInput.style.color = 'orange';
    dynamicInput.style.border = 'none';
    dynamicInput.style.outline = 'none';
    dynamicInput.style.fontFamily = 'monospace';
    dynamicInput.style.fontSize = '16px';
    dynamicInput.autocomplete = 'off';

    dynamicInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            processCommand(dynamicInput.value.trim()); 
            dynamicInput.remove(); 
        }
    });

    line.appendChild(prompt);
    line.appendChild(dynamicInput);
    output.appendChild(line);

    dynamicInput.focus(); 
}

function showHelp() {
    const output = document.getElementById('output');
    const helpMessage = document.createElement('span');
    helpMessage.style.color = 'white';
    typeEffect(helpMessage, "Available commands:\n- status: Show system status\n- if you have any problem, please call me\n- email: s22115103 @ stu.edu.tw\n", 30);
    output.appendChild(helpMessage);
}

function showStatus() {
    const output = document.getElementById('output');
    const statusMessage = document.createElement('span');
    statusMessage.style.color = 'white';
    typeEffect(statusMessage, "System is running smoothly.\n", 30);
    output.appendChild(statusMessage);
}

function showLucain() {
    const output = document.getElementById('output');
    const LucainMessage = document.createElement('span');
    LucainMessage.style.color = 'white';
    typeEffect(LucainMessage, "He was in there befor...\n", 30);
    output.appendChild(LucainMessage);
}

function showUnknownCommand() {
    const output = document.getElementById('output');
    const unknownMessage = document.createElement('span');
    unknownMessage.style.color = 'red';
    typeEffect(unknownMessage, "Unknown command. Type 'help' for a list of commands.", 30);
    output.appendChild(unknownMessage);
}
