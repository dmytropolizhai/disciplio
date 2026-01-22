ALTER TABLE `tasks` ADD `deadline` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` ADD `created_at` text DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` ADD `updated_at` text DEFAULT now() NOT NULL;