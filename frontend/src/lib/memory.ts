export interface UserMemory {

  targetRole: string;

  experienceLevel: string;

  strongAreas: string[];

  weakAreas: string[];
}


const MEMORY_KEY =
  'HireGenix-memory';


export function saveMemory(

  data: UserMemory

) {

  if (
    typeof window === 'undefined'
  ) return;

  localStorage.setItem(

    MEMORY_KEY,

    JSON.stringify(data)
  );
}


export function getMemory():

  UserMemory | null {

  if (
    typeof window === 'undefined'
  ) return null;

  const data =
    localStorage.getItem(
      MEMORY_KEY
    );

  if (!data) return null;

  return JSON.parse(data);
}