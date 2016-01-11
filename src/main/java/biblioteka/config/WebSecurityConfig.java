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
import java.util.ArrayList;
import biblioteka.models.Role;
import biblioteka.repositories.RolesRepository;
import biblioteka.models.RoleEnum;

@Configuration
@EnableWebMvcSecurity
@EnableTransactionManagement
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
		@Autowired
		private AccountsRepository accountRepository;

		@Autowired
		private RolesRepository rolesRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/css/**", "/js/**", "/img/**", "/api/books/**", "/api/authors/**", "/api/images/**", "/fonts/**", "/contact", "/register", "/book/**", "/author/**").permitAll()
								.antMatchers("/manage", "/api/people/**", "/person/**", "/api/loans/**", "/loan/**", "/copy/**").hasRole("WORKER")
								.antMatchers("/admin", "/api/users/**", "/user/**").hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .defaultSuccessUrl("/account")
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll()
								.and()
						.csrf()
							.disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(new UserDetailsService(){
					@Transactional(readOnly=true)
					@Override
					public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
						Account account = accountRepository.findByUsername(username);
						if (account == null) return null;
						List<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
						Iterable<Role> roles = rolesRepository.findByAccount(account);
						for (Role role: roles){
							auth.add(new GrantedAuthority(){
								public String getAuthority(){
									return role.getRole().name();
								}
							});
						}
						return new User(username, account.securityGetPassword(), auth);
					}
				});
    }
}
