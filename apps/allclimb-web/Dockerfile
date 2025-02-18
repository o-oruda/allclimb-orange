# Stage 1: Build
FROM node:20.9.0 as builder

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 파일 복사
COPY ../../yarn.lock .
COPY . .

COPY node_modules.tar.gz .
RUN tar -xzf node_modules.tar.gz && rm node_modules.tar.gz
RUN yarn build

# Stage 2: Output artifacts
FROM alpine:3.18

# 정적 파일 복사
COPY --from=builder /app/build /build

# 빌드 결과를 공유할 수 있도록 설정
CMD ["sh", "-c", "echo 'Static files available in /build'"]
