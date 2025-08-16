// Example: Fetching Real JSON from a Backend
// Step 1: Call a real backend API
fetch("https://jsonplaceholder.typicode.com/users") // This sends an HTTP GET request
    .then(response => {
        // Step 2: Convert response to JSON
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(users => {
        // Step 3: Work with the data
        console.log("Users from API:", users);

        users.forEach(user => {
            console.log(`ID: ${user.id} | Name: ${user.name} | Email: ${user.email}`);
        });
    })
    .catch(error => {
        // Step 4: Handle any errors
        console.error("❌ Error fetching data:", error);
    })
    .finally(() => {
        console.log("✅ API call finished");
    });
