let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
} else {
  backendHost = "http://cshtodobe02-env.eba-bawsfgb2.ap-northeast-2.elasticbeanstalk.com";
}

// 백엔드를 AWS에 배포하지 않은 경우 이 주소를 사용할 것
//backendHost = "http://localhost:8080";

export const API_BASE_URL = `${backendHost}`;
