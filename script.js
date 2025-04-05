// app.js

// Send request to backend for generating hash
async function generateHash() {
    const name = document.getElementById("user-name").value;

    if (!name) {
        alert("Please enter your name!");
        return;
    }

    const response = await fetch('http://localhost:3000/generate-hash', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    const result = await response.json();
    if (response.ok) {
        document.getElementById("hash-output").innerText = "Generated Hash: " + result.hash;
    } else {
        alert(result.error);
    }
}

// Send request to backend to simulate transaction
async function addTransaction() {
    const receiverAddress = document.getElementById("receiver-address").value;
    const amount = document.getElementById("amount-input").value;

    if (!receiverAddress || !amount || amount <= 0) {
        alert("Please enter a valid receiver address and amount!");
        return;
    }

    const fromAddress = "0xDummyAccount1234567890abcdef"; // This would be dynamically generated in a real app

    const response = await fetch('http://localhost:3000/send-transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fromAddress, toAddress: receiverAddress, amount }),
    });

    const result = await response.json();
    if (response.ok) {
        document.getElementById("blockchain-output").innerHTML =
            `Transaction Sent! <br>Receiver: ${receiverAddress} <br> Amount: ${amount} ETH <br> Tx Hash: <a href="https://sepolia.etherscan.io/tx/${result.txHash}" target="_blank">${result.txHash}</a>`;
    } else {
        alert(result.error);
    }
}
