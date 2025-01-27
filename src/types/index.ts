export interface PoseDetectionConfig {
  modelPath?: string;
  minPoseDetectionConfidence?: number;
  minPosePresenceConfidence: number;
  minTrackingConfidence: number;
  numPoses: number;
  modelComplexity?: 'Lite' | 'Full' | 'Heavy';
  smoothLandmarks?: boolean;
  enableSegmentation?: boolean;
  smoothSegmentation?: boolean;
}

export interface Landmark {
  x: number;
  y: number;
  z: number;
  visibility?: number;
}

export interface ElbowPositions {
  leftElbow: Landmark | null;
  rightElbow: Landmark | null;
}

export interface HandStyle {
  radius?: number;
  color?: string;
  showVirtualHand?: boolean;
}

export type AmputationType = 'left_arm' | 'right_arm' | 'both';
