export function insertDetails(userData) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("https:localhost:8000/insertDetails", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  