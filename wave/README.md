# Coding Practice

**Youtube에서 물결을 그리는 스터디 코드를 가져왔습니다.**  
https://youtu.be/LLfhY4eVwDY
감이 떨어지지 않으려고 몸 풀기...

## Getting Started
* 학습항목을 미리 살펴보고 코드를 보신다면 이해에 도움이 될 듯 합니다.
* 베지어 곡선을 참고해도 좋을 듯 합니다.
* sin 함수로 가볍게 살펴보시면 좋습니다.
* visual studio code 로 가볍게 해보세요.
* 가볍게 하기 위해서는 live server extention이 필요합니다.
  * pull 받고 나서 wave folder로 open folder 한 후 live server workspace 설정하셔야 합니다.

### 학습된 항목된
* API 
  * https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
  * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
  * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath

* extention of Visual studio code
  * live sever - script module 을 사용하기 위해서는 cors 설정이 필요함. file path로의 접근 할 경우 CORS 오류 발생.

* javascript type module
  * https://ko.javascript.info/modules-intro
  * use strict
  * scope of module level
  * 단 한번만 평가 수행.
  * import.meta 객체는 현재 모듈에 대한 정보를 제공해줍니다.
  * 'this’는 undefined
  * 지연 실행
  * 인라인 스크립트의 비동기 처리
  * CORS
  * ‘경로가 없는’ 모듈은 금지
  * 호환을 위한 ‘nomodule’ &lt;script nomodule&gt;

## 더 찾아볼 부분
* 성능
  * window.addEventListener, window.requestAnimationFrame 이 부분에서 성능 저하가 발생할 것으로 보입니다.
  * 특히, requestAnimationFrame 이 repaint 되는 영역을 활용하지 말고 canvas 내부에서 처리할 수 있는 방법이 없을까요?

## Running
* index.html 을 브라우저로 실행 하시면 됩니다.

## 예제 설명

* 역할자
  * App.js : 앱 구동 및 window 객체 이벤트와 바인딩. 렌더링의 trigger 역할
  * WaveGroup.js: 물결을 갯수를 정의하고 갯수에 따른 Wave 객체를 생성합니다. 또한, re-render의 gateway 역할이며 loop를 돌면서 Wave에 re-paint를 요청합니다.
  * Wave.js: 각 개별 물결을 정의합니다. 이 물결은 6개의 점(x, y)으로 구성되어 선을 연결합니다.
  * Point.js: 하나의 Wave의 하나의 점(x, y)을 정의합니다. 이 점은 Y값을 변화를 주고 위아래로 움직이도록하기 위해 Y값을 지속적으로 변경 시킵니다.

* repaint flow
  * window.addEventListener('resize') -> WaveGroup.resize() -> wave.resize -> wave.init() => Make Point Objects with for-loop
  * window.requestAnimationFrame() -> App.animate() -> WaveGroup.draw() -> for-in => wave.draw() -> for-in => point.update


## Acknowledgments
* 유투버 Interactive Developer 님에게 감사합니다. 코드를 제 스타일로 조금 변경했고 이해를 위해서 주석을 포함했습니다.
