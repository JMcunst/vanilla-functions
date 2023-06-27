var couriers = [
  {
    id: "de.dhl",
    name: "DHL",
    tel: "+8215880001",
  },
  {
    id: "jp.sagawa",
    name: "Sagawa",
    tel: "+810120189595",
  },
  {
    id: "jp.yamato",
    name: "Kuroneko Yamato",
    tel: "+810120189595",
  },
  {
    id: "jp.yuubin",
    name: "Japan Post",
    tel: "+810570046111",
  },
  {
    id: "kr.chunilps",
    name: "천일택배",
    tel: "+8218776606",
  },
  {
    id: "kr.cjlogistics",
    name: "CJ대한통운",
    tel: "+8215881255",
  },
  {
    id: "kr.cupost",
    name: "CU 편의점택배",
    tel: "+8215771287",
  },
  {
    id: "kr.cvsnet",
    name: "GS Postbox 택배",
    tel: "+8215771287",
  },
  {
    id: "kr.cway",
    name: "CWAY (Woori Express)",
    tel: "+8215884899",
  },
  {
    id: "kr.daesin",
    name: "대신택배",
    tel: "+82314620100",
  },
  {
    id: "kr.epost",
    name: "우체국 택배",
    tel: "+8215881300",
  },
  {
    id: "kr.hanips",
    name: "한의사랑택배",
    tel: "+8216001055",
  },
  {
    id: "kr.hanjin",
    name: "한진택배",
    tel: "+8215880011",
  },
  {
    id: "kr.hdexp",
    name: "합동택배",
    tel: "+8218993392",
  },
  {
    id: "kr.homepick",
    name: "홈픽",
    tel: "+8218000987",
  },
  {
    id: "kr.honamlogis",
    name: "한서호남택배",
    tel: "+8218770572",
  },
  {
    id: "kr.ilyanglogis",
    name: "일양로지스",
    tel: "+8215880002",
  },
  {
    id: "kr.kdexp",
    name: "경동택배",
    tel: "+8218995368",
  },
  {
    id: "kr.kunyoung",
    name: "건영택배",
    tel: "+82533543001",
  },
  {
    id: "kr.logen",
    name: "로젠택배",
    tel: "+8215889988",
  },
  {
    id: "kr.lotte",
    name: "롯데택배",
    tel: "+8215882121",
  },
  {
    id: "kr.slx",
    name: "SLX",
    tel: "+82316375400",
  },
  {
    id: "kr.swgexp",
    name: "성원글로벌카고",
    tel: "+82327469984",
  },
  {
    id: "nl.tnt",
    name: "TNT",
  },
  {
    id: "un.upu.ems",
    name: "EMS",
  },
  {
    id: "us.fedex",
    name: "Fedex",
  },
  {
    id: "us.ups",
    name: "UPS",
  },
  {
    id: "us.usps",
    name: "USPS",
  },
];

function populateCourierDropdown() {
  var dropdown = document.getElementById("courier-dropdown");

  // 기본 옵션 추가
  var defaultOption = document.createElement("option");
  defaultOption.text = "Select a courier";
  dropdown.add(defaultOption);

  // 각 배송업체 옵션 추가
  couriers.forEach(function (courier) {
    var option = document.createElement("option");
    option.value = courier.id;
    option.text = courier.name;
    dropdown.add(option);
  });
}

function searchTracking() {
    console.log('Searching...');
    var courierDropdown = document.getElementById("courier-dropdown");
    var selectedCourier = courierDropdown.value;
    var trackingNumberInput = document.getElementById("tracking-number-input");
    var trackingNumber = trackingNumberInput.value;
    var resultContainer = document.getElementById("result-container");
  
    // 결과를 초기화
    resultContainer.innerHTML = "";
  
    if (selectedCourier && trackingNumber) {
      var apiUrl = "https://apis.tracker.delivery/carriers/" + selectedCourier + "/tracks/" + trackingNumber;
  
      // AJAX 요청 등 API 호출을 처리하는 코드 작성
      // 이 예시에서는 결과를 단순히 화면에 출력
      var result = document.createElement("p");
      result.textContent = "Carrier ID: " + selectedCourier + ", Track ID: " + trackingNumber;
      resultContainer.appendChild(result);
    } else {
      console.log("Please select a courier and enter a tracking number.");
    }
  }
  
  var searchIcon = document.querySelector(".search-icon");
  searchIcon.addEventListener("click", searchTracking);

  $('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el').removeClass('expanded');
  });