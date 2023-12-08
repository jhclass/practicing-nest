import { Test, TestingModule } from "@nestjs/testing";
import { MovieService } from "./movie.service";
import { NotFoundException } from "@nestjs/common";
describe("MovieService", () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    //첫번째 배열을 실행할꺼야.
    it("should return an array", () => {
      // const list = service.create({
      // });
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne", () => {
    it("should return movie", () => {
      service.create({
        title: "testMovie",
        year: 2024,
        genres: ["test"],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it("should throw 404 error", () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException); //import 필요 (NotFoundException)
      }
    });
  });

  describe("deleteOne", () => {
    it("deletes a movie", () => {
      service.create({
        title: "testMovie",
        year: 2024,
        genres: ["test"],
      });

      const allMovies = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();
      expect(afterDelete.length).toEqual(allMovies.length - 1);
      expect(afterDelete.length).toBeLessThan(allMovies.length);
    });
    it("should return a 404", () => {
      try {
        service.deleteOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe("create", () => {
    it("should creatre a movie", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: "testMovie",
        year: 2024,
        genres: ["test"],
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });
});

/**필기 코멘트 */
/** 
 *expect(error).toBeInstanceOf(NotFoundException)와 expect(error.message).toBe("SomeErrorMessage")는 두 가지 다른 테스트 방식입니다.
expect(error).toBeInstanceOf(NotFoundException)은 error 객체 자체가 NotFoundException 클래스의 인스턴스인지를 확인하는 것입니다. 이 경우, error 객체의 타입만을 검사하며, 에러 메시지나 기타 정보를 고려하지 않습니다. 즉, 에러 객체의 타입만 중요하다고 판단하는 테스트입니다.
expect(error.message).toBe("SomeErrorMessage")은 에러 객체의 message 속성을 검사하여 특정한 에러 메시지가 예상한 대로 설정되어 있는지 확인합니다. 이 경우, 에러 메시지가 정확하게 일치해야 테스트가 통과합니다.
따라서 두 테스트 방식은 서로 다른 측면을 검사합니다. 첫 번째 테스트는 예상한 예외 클래스가 발생하는지를 확인하고, 두 번째 테스트는 예외 메시지의 내용이 예상과 일치하는지 확인합니다.
만약 특정 예외 클래스를 확인하고 동시에 에러 메시지도 검사하려면 다음과 같이 expect 문을 중첩하여 사용할 수 있습니다:
  
*/
