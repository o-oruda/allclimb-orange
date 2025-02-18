# Stage 1: Build
FROM node:20.9.0 as builder

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 파일 복사
COPY package.json yarn.lock .
COPY apps/allclimb-web/ ./apps/allclimb-web/


# 의존성 설치 및 빌드
RUN yarn install --frozen-lockfile
RUN yarn build

# Stage 2: Output artifacts
FROM alpine:3.18

# 정적 파일 복사
COPY --from=builder /app/build /build

# 빌드 결과를 공유할 수 있도록 설정
CMD ["sh", "-c", "echo 'Static files available in /build'"]
