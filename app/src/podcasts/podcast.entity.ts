import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Podcast {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  image: string;

  @Column()
  thumbnail: string;

  @Column()
  listennotes_url: string;

  @Column()
  total_episodes: number;

  @Column({ default: false })
  explicit_content: boolean;

  @Column('text')
  description: string;

  @Column()
  itunes_id: number;

  @Column()
  rss: string;

  @Column({ type: 'bigint' })
  latest_pub_date_ms: string;

  @Column({ type: 'bigint' })
  earliest_pub_date_ms: string;

  @Column()
  language: string;

  @Column()
  country: string;

  @Column()
  website: string;

  @Column('json')
  extra: object;

  @Column({ default: false })
  is_claimed: boolean;

  @Column()
  email: string;

  @Column()
  type: string;

  @Column('json')
  looking_for: object;

  @Column('json')
  genre_ids: Array<number>;
}
