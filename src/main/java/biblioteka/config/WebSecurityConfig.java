package biblioteka.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.GrantedAuthority;
import biblioteka.models.Account;
import biblioteka.repositories.AccountsRepository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Configuration
@EnableWebMvcSecurity
@EnableTransactionManagement
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
		@Autowired
		private AccountsRepository accountRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/css/**", "/js/**", "/api/**", "/fonts/**", "/contact", "/register", "/book/**", "/author/**").permitAll()
								.antMatchers("/manage").hasRole("WORKER")
								.antMatchers("/admin").hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .defaultSuccessUrl("/account")
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(new UserDetailsService(){
					@Transactional(readOnly=true)
					@Override
					public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
						Account account = accountRepository.findByUsername(username);
						if (account == null) return null;
						List<GrantedAuthority> auth = AuthorityUtils.createAuthorityList(account.getRole().name());
						return new User(username, account.securityGetPassword(), auth);
					}
				});
    }
}
