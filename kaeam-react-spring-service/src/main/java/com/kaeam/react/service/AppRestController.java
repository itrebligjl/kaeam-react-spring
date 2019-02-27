package com.kaeam.react.service;

import java.util.Collection;

import org.jbpm.services.api.DefinitionService;
import org.jbpm.services.api.RuntimeDataService;
import org.jbpm.services.api.UserTaskService;
import org.jbpm.services.api.model.ProcessInstanceDesc;
import org.kie.api.runtime.query.QueryContext;
import org.kie.api.task.model.TaskSummary;
import org.kie.internal.query.QueryFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppRestController {

    @Autowired
    RuntimeDataService runtimeDataService;
    	
	@Autowired
	private UserTaskService userTaskService;
	
	@Autowired
	private DefinitionService definitionService;

    @GetMapping(path = "/processinstances", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<ProcessInstanceDesc> getProcessInstancesInfo() {
    	
    	System.out.println(">>>>>>>> AppRestController.getProcessInstancesInfo CALLED <<<<<<<<");
    	
        return runtimeDataService.getProcessInstances(new QueryContext());
    }
    
    
	@GetMapping(path = "/task", produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<TaskSummary> getTasks() {		
	    //String userId = getAuthUser();
		String userId = "john";
	    
	    System.out.println(">>>>>>>> AppRestController.getTasks CALLED <<<<<<<<");
	    System.out.println(">>>>>>>> userId: " + userId);
	      
		Collection<TaskSummary> tasks = runtimeDataService.getTasksAssignedAsPotentialOwner(userId, new QueryFilter(0, 100));

		System.out.println(">>>>>>>> SIZE OF TASKS LIST: " + tasks.size());
		
		return tasks;
 
	}
	
	protected String getAuthUser() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	    String userId = auth.getName();
	    
	    return userId;
	}
}
