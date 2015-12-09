package biblioteka.controllers.util;

import org.springframework.security.core.userdetails.User;
import javax.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;

public class RoleBasedModel {
	public static void parseModel(HttpServletRequest request, Model model){
		addAdminTools(request, model);
		addWorkerTools(request, model);
		addUserTools(request, model);
	}
	public static void addAdminTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("ADMIN")){
			model.addAttribute("adminMode", 1);
		}
	}
	public static void addWorkerTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("WORKER")){
			model.addAttribute("workerMode", 1);
		}
	}
	public static void addUserTools(HttpServletRequest request, Model model){
		if (request.isUserInRole("User")){
			model.addAttribute("userMode", 1);
		}
	}
}
