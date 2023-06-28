function fetchTranslation(text) {
    var apiUrl = "https://openapi.naver.com/v1/papago/n2mt";
    var clientId = "KoDD3dbaOKQ9ZAhCRllS";
    var clientSecret = "ZS91V0EZrf";
  
    var requestBody = "source=ko&target=en&text=" + encodeURIComponent(text);
  
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecret
      },
      body: requestBody
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.message.result.translatedText;
      });
  }
  