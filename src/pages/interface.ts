export interface Perform {
  impressions: number;
  clicks: number;
  ctr: number;
  cpa: number;
  conversions: number;
}

export interface UserData {
  doc_id: string;
  first_name: string;
  last_name: string;
  mail: string;
  avatar: string;
  experience: {
    companyName: string;
    industry: string;
    role: string;
    teamsize: string;
  };
  socialList?: string[];
  created_at: Date;
  updated_at: Date;
}
