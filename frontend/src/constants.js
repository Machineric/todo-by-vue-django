const TODOS_API_BASE_URL_PROD = 'http://todosoftoday-dev.eba-symdykcm.ap-northeast-2.elasticbeanstalk.com/v1/todos/'
const TODOS_APi_BASE_URL_DEV = 'http://127.0.0.1:8000/v1/todos/'
const TODOS_API_BASE_URL = process.env.NODE_ENV === 'development' ? TODOS_API_BASE_URL_PROD : TODOS_APi_BASE_URL_DEV

export {
    TODOS_API_BASE_URL,
}