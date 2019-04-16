# 문법과 자료형 (Grammar and types)

> [MDN: Grammar and types](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)  
> JavaScript의 기본 문법과 변수 선언, 자료형 및 리터럴을 다룹니다.

## 기본 (Basics)

* 대소문자 구분, 유니코드 문자셋 사용

```javascript
  var a = 0;
  var A = 1;
  console.log(a) // 0
  console.log(A) // 1
```

* 명령을 '문(statement)' 이라고 부르며 '세미콜론(;)' 으로 구분 - 하나의 라인에 두 개 이상의 구문이 쓰일 경우 문제가 될 수 있음

* 소스는 왼쪽에서 오른쪽으로 탐색, 토큰, 제어 문자, 줄바꿈 문자, 주석, 공백으로 이루어진 element 시퀀스 변환

> [키워드 : 세미콜론 자동 삽입 규칙(ASI - Automatic semicolon insertion)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)  
> [키워드 : 어휘 문법(lexical grammar)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar)

## 주석 (CommentsSection)

* 주석은 스크립트 실행시 버려짐

```javascript
// 한 줄 주석

/*
 * 여러 줄 주석
 * /
```

## 선언 (Declarations)

### 변수 (Variables)

* 어플리케이션에서 '값'을 상징하는 이름을 달고 변수로 사용

* 변수의 이름은 식별자(identifier) 라고 불리고, 특정 규칙을 따름

> ISO 8859-1 혹은 Unicode 문자(가령 å 나 ü)도 식별자에 사용할 수 있음  
> ex) Number_hits, temp99, $credit, _name

### 변수 선언 (Declaring variables)

```javascript
// 변수의 선언 종류
var a = 0   // 변수를 선언. 추가로 동시에 초기화
let b = 0   // 블록범위(scope) 지역 변수 선언. 추가로 동시에 값을 초기화
const c = 0 // 블록범위(scope) 읽기 전용 상수를 선언.

// 변수 선언 방식

var d = 0; // 전역변수 및 지역 변수 둘다 선언 가능
e = 0; // 전역변수로 생성됨 

// strict mode
'use strict'; // 스트릭트 모드 설정 : 스트릭트 모드에서는 e = 0 같은 사용을 하면 안 됨

// let, const 의 사용은 변수 범위를 공부하고 사용 권장.
```

### 변수 할당 (Evaluating variables)

* 지정된 초기값이 없는 경우 undefined 값 반환

* 선언되지 않은 변수에 접근 시도 하면 ReferenceError 발생

```javascript
var a;
console.log("a 값은 " + a); // "a 값은 undefined"로 로그가 남음.
console.log('b 값은 ' + b); // b 값은 undefined
var b;
console.log("c 값은 " + c); // ReferenceError 예외 던짐
let x;
console.log('x 값은 ' + x); // x 값은 undefined
console.oog('y 값은 ' + y); // ReferenceError 예외 던짐
let y;
```

### 변수 범위 (Variable scope)

#### 전역변수와 지역변수
```javascript
var global = 0; 
// a 함수 보다 밖에 있음으로 전역 변수 
// a 함수 내에 있는 local 변수는 지역 변수임으로 가져다 쓸 수 없다.
function a(){
  var local = 0; // a 함수 내에서 사용되는 지역 변수
  // a 함수 내에서는 전역 변수인 global 변수를 사용 할 수 있다.
}
```
#### 블록 스코프
```javascript
// ECMAScript 6 에 도입된 let 사용
if(true){
  // '{}' 중괄호를 블록문이라고 하는데 
  // es5 에서 var 의 사용과는 달리 변수가 해당 블록문의 범위에서만 작동한다.
  var x = 5;
  let y = 4;
}
console.log(x) // 5
console.log(t) // ReferenceError : y is not defined
```

### 변수 호이스팅
### 함수 호이스팅
### 전역변수


## 상수

## 데이터 구조 및 형
### 자료형 변환
### 문자열을 숫자로 변환하기

## 리터럴
### 배열 리터럴
### 불리언 리터럴
### 정수 리터럴
### 부동 소수점 리터럴
### 객체 리터럴
### 정규식 리터럴
### 문자열 리터럴
