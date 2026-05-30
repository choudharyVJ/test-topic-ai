export interface RoadmapStep {

  phase: string;

  description: string;

  skills: string[];
}


export interface RoadmapResponse {

  title: string;

  steps: RoadmapStep[];
}