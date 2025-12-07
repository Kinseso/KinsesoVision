-- Core tables for KinsesoVision v12 (service_requests, posts_blog, evidence_records)

create table if not exists service_requests (
  id bigserial primary key,
  service_type text not null,
  name text,
  contact text,
  details text,
  created_at timestamptz default now()
);

create table if not exists posts_blog (
  id bigserial primary key, title text not null, category text, teaser text, body text, created_at timestamptz default now()
);

create table if not exists evidence_records (
  id bigserial primary key,
  owner uuid,
  device_type text,
  device_id text,
  recorded_at timestamptz,
  duration_seconds int,
  storage_path text,
  metadata jsonb,
  created_at timestamptz default now()
);
