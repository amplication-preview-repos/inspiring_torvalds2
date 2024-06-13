import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExperienceService } from "./experience.service";
import { ExperienceGrpcControllerBase } from "./base/experience.grpc.controller.base";

@swagger.ApiTags("experiences")
@common.Controller("experiences")
export class ExperienceGrpcController extends ExperienceGrpcControllerBase {
  constructor(protected readonly service: ExperienceService) {
    super(service);
  }
}
