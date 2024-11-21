import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';
import { useLaboratoryStore } from '@store/laboratoryStore';
import { UUID } from 'crypto';

export const listLaboratories = async (laboratoryGateway: LaboratoryGateway) => {
  const laboratories: Array<Laboratory> = await laboratoryGateway.listAll();
  const laboratoryStore = useLaboratoryStore();
  laboratoryStore.list(laboratories);
};

export const getLaboratoryInfo = async (laboratoryGateway: LaboratoryGateway, uuid: UUID) => {
  const laboratory: Laboratory = await laboratoryGateway.getByUuid(uuid);
  return laboratory;
};
