export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendance: {
        Row: {
          id: string
          meeting_id: string | null
          status: string | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          meeting_id?: string | null
          status?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          meeting_id?: string | null
          status?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chat: {
        Row: {
          file_url: string | null
          group_id: string | null
          id: string
          message: string
          message_type: string | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          file_url?: string | null
          group_id?: string | null
          id?: string
          message: string
          message_type?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          file_url?: string | null
          group_id?: string | null
          id?: string
          message?: string
          message_type?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          content: string
          created_at: string | null
          id: string
          meeting_id: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          meeting_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          meeting_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback_reports: {
        Row: {
          content: string
          created_at: string | null
          id: string
          report_type: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          report_type?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          report_type?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          admin_id: string | null
          category: string | null
          created_at: string | null
          id: string
          member_count: number | null
          name: string
          region: string | null
          updated_at: string | null
        }
        Insert: {
          admin_id?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          member_count?: number | null
          name: string
          region?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_id?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          member_count?: number | null
          name?: string
          region?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      logs: {
        Row: {
          description: string
          id: string
          timestamp: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          description: string
          id?: string
          timestamp?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          description?: string
          id?: string
          timestamp?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_roles: {
        Row: {
          assigned_at: string | null
          bible_verse: string | null
          id: string
          meeting_id: string | null
          role: string | null
          user_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          bible_verse?: string | null
          id?: string
          meeting_id?: string | null
          role?: string | null
          user_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          bible_verse?: string | null
          id?: string
          meeting_id?: string | null
          role?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meeting_roles_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meeting_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      meetings: {
        Row: {
          approved_by: string | null
          countdown_timer_enabled: boolean | null
          created_at: string | null
          created_by: string | null
          group_id: string | null
          id: string
          meeting_type: string | null
          meeting_url: string | null
          name: string
          scheduled_time: string
          status: string | null
        }
        Insert: {
          approved_by?: string | null
          countdown_timer_enabled?: boolean | null
          created_at?: string | null
          created_by?: string | null
          group_id?: string | null
          id?: string
          meeting_type?: string | null
          meeting_url?: string | null
          name: string
          scheduled_time: string
          status?: string | null
        }
        Update: {
          approved_by?: string | null
          countdown_timer_enabled?: boolean | null
          created_at?: string | null
          created_by?: string | null
          group_id?: string | null
          id?: string
          meeting_type?: string | null
          meeting_url?: string | null
          name?: string
          scheduled_time?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meetings_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meetings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meetings_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      notices: {
        Row: {
          attachments: string[] | null
          content: string
          created_at: string | null
          created_by: string | null
          group_id: string | null
          id: string
          scheduled_time: string
          title: string
        }
        Insert: {
          attachments?: string[] | null
          content: string
          created_at?: string | null
          created_by?: string | null
          group_id?: string | null
          id?: string
          scheduled_time: string
          title: string
        }
        Update: {
          attachments?: string[] | null
          content?: string
          created_at?: string | null
          created_by?: string | null
          group_id?: string | null
          id?: string
          scheduled_time?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "notices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notices_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          content: string
          id: string
          sent_at: string | null
          status: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          content: string
          id?: string
          sent_at?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          content?: string
          id?: string
          sent_at?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prayer_requests: {
        Row: {
          approved_by: string | null
          category: string | null
          content: string
          created_at: string | null
          group_id: string | null
          id: string
          prayed_for_count: number | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          approved_by?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          group_id?: string | null
          id?: string
          prayed_for_count?: number | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          approved_by?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          group_id?: string | null
          id?: string
          prayed_for_count?: number | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prayer_requests_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prayer_requests_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prayer_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      resources: {
        Row: {
          created_at: string | null
          description: string | null
          file_url: string
          group_id: string | null
          id: string
          title: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          file_url: string
          group_id?: string | null
          id?: string
          title: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          file_url?: string
          group_id?: string | null
          id?: string
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resources_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      user_groups: {
        Row: {
          group_id: string
          user_id: string
        }
        Insert: {
          group_id: string
          user_id: string
        }
        Update: {
          group_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_groups_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_groups_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          birthday_day: number | null
          birthday_month: number | null
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          name: string
          notification_preferences: Json | null
          phone: string | null
          profile_image: string | null
          role: string | null
        }
        Insert: {
          birthday_day?: number | null
          birthday_month?: number | null
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          name: string
          notification_preferences?: Json | null
          phone?: string | null
          profile_image?: string | null
          role?: string | null
        }
        Update: {
          birthday_day?: number | null
          birthday_month?: number | null
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          name?: string
          notification_preferences?: Json | null
          phone?: string | null
          profile_image?: string | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
