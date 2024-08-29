import { Component, OnInit } from '@angular/core'
import { SupabaseService } from './supabase.service'
import { AccountComponent } from './credenciais/account/account.component'
import { AuthComponent } from './credenciais/auth/auth.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccountComponent,AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.session? this.supabase.session: null;
  
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
