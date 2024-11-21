import { Laboratory } from '@core/entities/laboratory';
import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';
import { useLaboratoryStore } from '@store/laboratoryStore';

export const listLaboratories = async (laboratoryGateway: LaboratoryGateway) => {
  const laboratories: Array<Laboratory> = await laboratoryGateway.listAll();
  const laboratoryStore = useLaboratoryStore();
  laboratoryStore.list(laboratories);
};
